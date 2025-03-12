import { WebSocketServer, WebSocket } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken';
import {prismaClient} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: number[];
  userId: string;
}

const users: User[] = [];

// Secure JWT verification with try-catch
function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, "123123") as JwtPayload;
    return decoded.userId || null;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

wss.on('connection', function connection(ws, request) {
  try {
    const url = request.url || '';
    const queryParams = new URLSearchParams(url.split('?')[1] || '');
    const token = queryParams.get('token') || '';
    const userId = checkUser(token);
    console.log("🚀 ~ connection ~ userId:", userId)

    if (userId === null) {
      ws.close();
      return;
    }

    ws.on('error', console.error);

    const user: User = { userId, rooms: [], ws };
    users.push(user);

    ws.on('message',async function message(data) {
      try {
        console.log("Received raw data:", data.toString()); // Add this line
        const parsedData = JSON.parse(data.toString());
        const roomId = Number(parsedData.roomId)

        if (parsedData.type === "join_room") {
          const user = users?.find(x => x.ws == ws)
          user?.rooms.push(roomId);

        }
        else if (parsedData.type === "leave_room") {
          const user = users?.find(x => x.ws == ws)
          if (!user) {
            return
          }
          user.rooms = user?.rooms.filter(x => x !== parsedData.roomId);
        }
        else if (parsedData.type === "chat") {
          const roomId = parseInt(parsedData.roomId);
          const message = parsedData.message;

          users.forEach(user => {
            if (user.rooms.includes(roomId)) {
              try {
                user.ws.send(JSON.stringify({
                  type: "chat",
                  message,
                  roomId
                }));
              } catch (sendError) {
                console.error("Error sending message:", sendError);
              }
            }
          });

          await prismaClient.chat.create({
            data:{
              message,roomId,userId
            }
          })
        }
      } catch (parseError) {
        console.error("Invalid JSON received:", parseError);
      }
    });

    ws.on('close', () => {
      const index = users.findIndex(u => u.ws === ws);
      if (index !== -1) {
        users.splice(index, 1);
      }
    });

    ws.send('Connected to WebSocket server');
  } catch (error) {
    console.error("Connection error:", error);
    ws.close();
  }
});

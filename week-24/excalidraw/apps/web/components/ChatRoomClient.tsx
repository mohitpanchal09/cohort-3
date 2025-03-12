"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

type Props = {
  messages: { message: string }[];
  id: number;
};

export default function ChatRoomClient({ messages, id }: Props) {
  const [chats, setChats] = useState(messages);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const { socket, loading } = useSocket();

  useEffect(() => {
    if (socket && !loading) {
      socket.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        })
      );

      socket.onmessage = (event) => {
        console.log("🚀 ~ useEffect ~ event:", event);

        try {
          const parsedData = JSON.parse(event.data);

          if (parsedData.type === "chat") {
            setChats((c) => [...c, { message: parsedData.message }]);
          }
        } catch (error) {
          console.warn("Received non-JSON message:", event.data);
        }
      };
    }

    return () => {
      socket?.close()
    };
  }, [socket, loading, id]);

  return (
    <>
      <div>
        {chats.map((m, index) => (
          <div key={index}>{m.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button
        onClick={() => {
          if (!currentMessage.trim()) return;

          socket?.send(
            JSON.stringify({
              type: "chat",
              message: currentMessage,
              roomId: id,
            })
          );
          setCurrentMessage("");
        }}
      >
        Send Message
      </button>
    </>
  );
}

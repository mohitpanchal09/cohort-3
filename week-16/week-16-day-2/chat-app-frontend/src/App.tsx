import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function App() {
  const [messages, setMessages] = useState<any>([]);
  const [msg, setMsg] = useState<string>();
  const [rooomId, setRoomId] = useState<string>("");
  const wsRef = useRef<any>();
  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:8080");
    wsRef.current = websocket;
    websocket.onmessage = (e) => {
      if(e.data!=='Hi, you have connected to the socket'){
        setMessages((m: any) => [...m, e.data]);

      }
    };
    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div className="h-[fit-content] bg-black text-gray-300 flex-col justify-center p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="text-black absolute right-1">
            Join Room
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join The Room</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Room Id
              </Label>
              <Input
                id="username"
                value={rooomId}
                className="col-span-3"
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() =>
                wsRef.current.send(
                  JSON.stringify({
                    type: "join",
                    payload: {
                      roomId: "red",
                    },
                  })
                )
              }
            >
              Join
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="h-[90vh] mt-10">
        {messages.map((msg: any) => (
          <div className="bg-white text-black p-3 rounded-md flex flex-col w-[fit-content] mb-2">
            {msg}
          </div>
        ))}
      </div>
      <div className="w-full bg-white flex rounded-lg mb-2">
        <Input
          type="text"
          className="flex-1 p-3 text-black rounded-lg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Enter the message"
        />
        <Button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 px-4 py-2 rounded"
          onClick={() =>
            wsRef.current.send(
              JSON.stringify({ type: "chat", payload: { message: msg } })
            )
          }
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}

export default App;

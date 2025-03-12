import axios from "axios"
import { BACKEND_URL } from "../app/config"
import ChatRoomClient from "./ChatRoomClient"

export default async function ChatRoom({id}:{id:number}) {
    const messages = await getChats(id)
  return (
    <div>
      <ChatRoomClient messages={messages} id={id}/>
    </div>
  )
}

async function getChats(roomId:number){
    const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`)
    console.log("🚀 ~ getChats ~ response:", response.data.messages)
    return response.data.messages
}
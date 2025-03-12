import axios from "axios"
import { BACKEND_URL } from "../../config"
import ChatRoom from "../../../components/ChatRoom"

export default async function page({params}: {
    params:{
        slug:string
    }
}) {
  const slug =(await params).slug
  const roomId = await getRoomId(slug)
  return (
    <div>
      <ChatRoom id={roomId}/>
    </div>
  )
}


async function getRoomId(slug:string){
  const response = await axios.get(`${BACKEND_URL}/room/${slug}`)
  return response.data.room.id
}
import axios from "axios"
import { BACKEND_URL } from "../config"

export async function getExistingShapes(roomId:string){
    const res = await axios.get(`${BACKEND_URL}/chats/${roomId}`)
    const messages = res.data.messages
    console.log("🚀 ~ getExistingShapes ~ res:", res)
    const shapes = messages.map((item:any)=>{
        const shape = JSON.parse(item.message)
        return shape
    })
    return shapes
}
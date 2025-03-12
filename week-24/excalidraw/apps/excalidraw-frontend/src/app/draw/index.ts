import { BACKEND_URL } from "../config";
import axios from "axios";

export type Shape = {
    type:"rect",
    x:number,
    y:number,
    height:number,
    width:number
} | {
    type:"circle",
    centerX:number,
    centerY:number,
    radius:number
}

export async function initDraw(canvas: HTMLCanvasElement,roomId:string,socket:WebSocket) {
    const ctx = canvas.getContext("2d");


    let existingShapes:Shape[] = await getExistingShapes(roomId)

    if (!ctx) return;

    socket.onmessage=(event)=>{
        const message = JSON.parse(event.data)
        if(message.type=="chat"){
            const parsedShape = JSON.parse(message.message)
            existingShapes.push(parsedShape)
            clearCanvas(existingShapes,canvas,ctx)
        }
    }

    clearCanvas(existingShapes,canvas,ctx)

    let clicked = false;
    let startX = 0
    let startY = 0
    canvas.addEventListener("mousedown", (e: any) => {
        clicked = true;
        startX = e.clientX
        startY = e.clientY
    });

    canvas.addEventListener("mouseup", (e: any) => {
        clicked = false;
        const width = e.clientX - startX
        const height = e.clientY - startY

        let shape:Shape | null = null

        //@ts-ignore
        const selectedTool = window.selectedTool
        if(selectedTool=="rect"){
             shape = {
                type:"rect",
                x:startX,
                y:startY,
                height:height,
                width:width
            }
            existingShapes.push(shape)
        }else if(selectedTool=="circle"){
            const radius = Math.max(width,height)/2
            shape = {
                type:"circle",
                centerX :startX + radius,
                centerY:startY+radius,
                radius:radius
            }
        }
        socket.send(JSON.stringify({
            type:"chat",
            message:JSON.stringify(shape),
            roomId:roomId
        }))
    });

    canvas.addEventListener("mousemove", (e: any) => {
        if (clicked) {
            const width = e.clientX - startX
            const height = e.clientY - startY
            clearCanvas(existingShapes,canvas,ctx)
            ctx.strokeStyle = "white"

            //@ts-ignore
            const selectedTool = window.selectedTool
            if(selectedTool=="rect"){
                ctx.strokeRect(startX, startY, width, height)
            }else if(selectedTool=="circle"){
                const centerX = startX + width/2
                const centerY = startY + height/2
                const radius = Math.max(width,height)/2
                ctx.beginPath()
                ctx.arc(centerX,centerY,radius,0,Math.PI*2)
                ctx.stroke()
                ctx.closePath()
            }

        }
    });
}  


function clearCanvas(existingShape:Shape[],canvas:HTMLCanvasElement,ctx:CanvasRenderingContext2D){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    existingShape.map((shape:any)=>{
        if(shape.type=="rect"){
            ctx.strokeStyle = "white"
            ctx.strokeRect(shape.x,shape.y,shape.width,shape.height)
        }else if(shape.type==="circle"){
            ctx.beginPath()
            ctx.arc(shape.centerX,shape.centerY,shape.radius,0,Math.PI*2)
            ctx.stroke()
            ctx.closePath()
        }
    })
}

async function getExistingShapes(roomId:string){
    const res = await axios.get(`${BACKEND_URL}/chats/${roomId}`)
    const messages = res.data.messages
    console.log("🚀 ~ getExistingShapes ~ res:", res)
    const shapes = messages.map((item:any)=>{
        const shape = JSON.parse(item.message)
        return shape
    })
    return shapes
}
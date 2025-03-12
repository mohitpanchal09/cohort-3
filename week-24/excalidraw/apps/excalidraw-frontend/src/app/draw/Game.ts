import { Tool } from "../../../component/Toolbar"
import { getExistingShapes } from "./http"

type Shape = {
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

export class Game{
    private canvas:HTMLCanvasElement
    private ctx:CanvasRenderingContext2D
    private existingShapes :Shape[]
    private roomId:string
    private socket:WebSocket
    private clicked:boolean
    private startX:number
    private startY:number
    private selectedTool:Tool = "rect"
    constructor(canvas:HTMLCanvasElement,roomId:string,socket:WebSocket){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")!
        this.existingShapes = []
        this.roomId = roomId
        this.socket = socket
        this.clicked = false
        this.startX = 0
        this.startY = 0
        this.init()
        this.initHandlers()
        this.initMouseHandlers()
    }
    async init(){
        this.existingShapes = await getExistingShapes(this.roomId)
        this.clearCanvas()
    }

    destroy(){
        this.canvas.removeEventListener("mousedown", this.mouseDownHandler);

        this.canvas.removeEventListener("mouseup", this.mouseUpHandler);

        this.canvas.removeEventListener("mousemove", this.mouseMoveHandler);
    }

    setTool(tool:Tool){
        this.selectedTool = tool
    }

    initHandlers(){
        this.socket.onmessage=(event)=>{
            const message = JSON?.parse(event.data)
            if(message.type=="chat"){
                const parsedShape = JSON?.parse(message.message)
                this.existingShapes.push(parsedShape)
                this.clearCanvas()
            }
        }
    }

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
        this.existingShapes.map((shape:any)=>{
            if(shape.type=="rect"){
                this.ctx.strokeStyle = "white"
                this.ctx.strokeRect(shape.x,shape.y,shape.width,shape.height)
            }else if(shape.type==="circle"){
                this.ctx.beginPath()
                this.ctx.arc(shape.centerX,shape.centerY,Math.abs(shape.radius),0,Math.PI*2)
                this.ctx.stroke()
                this.ctx.closePath()
            }
        })
    }

    mouseDownHandler=(e:any)=>{
        this.clicked = true;
        this.startX = e.clientX
        this.startY = e.clientY
    }
    mouseUpHandler=(e:any)=>{
        this.clicked = false;
        const width = e.clientX - this.startX
        const height = e.clientY - this.startY

        let shape:Shape | null = null

        //@ts-ignore
        const selectedTool = this.selectedTool
        if(selectedTool=="rect"){
             shape = {
                type:"rect",
                x:this.startX,
                y:this.startY,
                height:height,
                width:width
            }
            this.existingShapes.push(shape)
        }else if(selectedTool=="circle"){
            const radius = Math.max(width,height)/2
            shape = {
                type:"circle",
                centerX :this.startX + Math.abs(radius),
                centerY:this.startY+Math.abs(radius),
                radius:Math.abs(radius)
            }
        }
        this.socket.send(JSON.stringify({
            type:"chat",
            message:JSON.stringify(shape),
            roomId:this.roomId
        }))
    }
    mouseMoveHandler=(e:any)=>{
        if (this.clicked) {
            const width = e.clientX - this.startX
            const height = e.clientY - this.startY
            this.clearCanvas()
            this.ctx.strokeStyle = "white"

            //@ts-ignore
            const selectedTool = this.selectedTool
            if(selectedTool=="rect"){
                this.ctx.strokeRect(this.startX,this.startY, width, height)
            }else if(selectedTool=="circle"){
                const centerX = this.startX + width/2
                const centerY = this.startY + height/2
                const radius = Math.max(width,height)/2
                this.ctx.beginPath()
                this.ctx.arc(centerX,centerY,Math.abs(radius),0,Math.PI*2)
                this.ctx.stroke()
                this.ctx.closePath()
            }

        }
    }

    initMouseHandlers(){
        this.canvas.addEventListener("mousedown", this.mouseDownHandler);

        this.canvas.addEventListener("mouseup", this.mouseUpHandler);

        this.canvas.addEventListener("mousemove", this.mouseMoveHandler);
    }
}
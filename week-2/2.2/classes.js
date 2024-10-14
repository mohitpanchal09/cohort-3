class Rectangle{
    constructor(height,width){
        this.height=height
        this.width=width
    }
    area(){
        return this.height*this.width
    }
}

const rect = new Rectangle(3,4)
console.log(rect.area())
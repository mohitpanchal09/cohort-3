interface Address {
    country:string,
    pincode:number,
    state:string
}

interface User {
    name:string,
    age:number,
    address: Address
}


let user:User = {
    name:"harkirat",
    age:30,
    address:{
        country:'india',
        state:'delhi',
        pincode:110044
    }
}

function isLegal(user:User):boolean{
    if(user.age>18){
        return true
    }
    return false
}

interface People {
    name:string,
    age:number
    greet(phrase:string):string
}

let person:People = {
    name:'mohit',
    age:22,
    greet:(a)=>{
        return a
    }
}

let greeting = person.greet('hello')
console.log(greeting)

interface Dimension{
    length:number,
    breadth:number
}

class Area implements Dimension{
    length:number;
    breadth: number;
    constructor(length:number,breadth:number){
        this.length=length
        this.breadth=breadth
    }
}

const area = new Area(2,3)
console.log(area)
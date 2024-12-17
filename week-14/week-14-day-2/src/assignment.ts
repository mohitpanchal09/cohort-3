interface Admin {
    name:string,
    permissions:string
}

interface User{
    name:string,
    age:number
}

type UserOrAdmin = Admin | User

function greet(user:UserOrAdmin){
    console.log(user.name)
}

let users:User[]
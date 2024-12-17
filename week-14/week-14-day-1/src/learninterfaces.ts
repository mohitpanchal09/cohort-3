function greet(user:{
    username:string,
    age:number
}){
    console.log(`hi ${user.username}`)
}

greet({username:'mnmohi',age:234})
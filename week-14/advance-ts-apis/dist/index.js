"use strict";
// interface User {
//    readonly name:string,
//     age:number,
//     email:string,
//     createdAt:string
// }
// // function sumOfAge(user1:User,user2:User){
// //     return user1.age+user2.age
// // }
// // const age = sumOfAge({name:'mohit',age:22},{name:"nivesh",age:22})
// // console.log(age)
// type NewUser = Pick<User,'name'|'email'>
// type PartialType = Partial<NewUser>
// const user:Readonly<User> ={
//     name:'mohit',age:22,email:'sdf',createdAt:'sdf'
// }
// user.name='sdf'

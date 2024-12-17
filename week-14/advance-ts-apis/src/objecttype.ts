// type User1 = {
//     id:string,
//     name:string
// }

// type Users ={
//     [key:string]:User1
// }

// const users:Users = {
//     "sdf":{
//         id:'sdf',
//         name:'sdfdf'
//     }
// }

//records and maps

// type Users = Record<string,{name:string,age:number}>

// const users:Users = {
//     "adsad":{name:'mohit',age:22}
// }

type User ={
    name:string,
    age:number
}

const users = new Map<string,User>()

users.set('user1',{name:'mohit',age:22})
users.set('users2',{name:'rahul',age:22})
console.log(users)

type EventType = 'click' | 'hover' | 'scroll'
type Excluded = Exclude<EventType,'click'> //hover and scroll
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

// async function createUser() {
//    await client.user.create({
//     data:{
//         username:"mohit",
//         age:12,
//         city:"delhi",
//         password:"abcd"
//     }
// })
// }

// createUser()

async function findUser(){
   const res =  await client.user.findFirst({
        where:{id:1},
        include:{
            todo:true
        }
    })
    console.log('res is ',res)
}
findUser()

// async function updateUser(){
//     await client.user.update({
//         where:{
//             id:1
//         },
//         data:{
//             username:"aniket love"
//         }
//     })
// }
// updateUser()
import { Client } from "pg";
import express, { Request, Response } from 'express';
const app = express()

app.use(express.json())

const pgClient = new Client({
    user:"neondb_owner",
    password:"9XNV8KFkOdWw",
    host:"ep-spring-bonus-a5pn4ewk.us-east-2.aws.neon.tech",
    port:5432,
    database:"neondb",
    ssl:true
})

async function main(){
    try{
        await pgClient.connect()
        console.log('db connected succesfully...')
    }catch(err){
        console.log('error connecting to db')
    }
    // const result = await pgClient.query("select * from users;")
    // console.log(result)
}
main()

app.post('/signup',async(req:Request,res:Response)=>{
    try{
        const {username,email,password} = req.body
        const result = await pgClient.query('insert into users (username,email,password) values ($1,$2,$3)',[username,email,password])
        res.json({message:"You have signed up"})
    }catch(err){
        console.log('err ',err)
        res.json({message:"error while signing up"})
    }
})

app.post('/todos',async(req:Request,res:Response)=>{
    try{
        const {user_id,title,description} = req.body
        const result = await pgClient.query('insert into todos (user_id,title,description) values ($1,$2,$3)',[user_id,title,description])
        res.json({message:"todo created"})
    }catch(err){
        console.log('err ',err)
        res.json({message:"Error creating todo"})
    }
})

app.post('/address',async(req:Request,res:Response)=>{
    try{
        const {user_id,country,city} = req.body
        const result = await pgClient.query('insert into address(user_id,country,city) values ($1,$2,$3)',[user_id,country,city])
        res.json({message:"Address entered successfully"})
    }catch(err){
        console.log('err' ,err)
        res.json({message:"Error entering address"})
    }
})

app.post('/signup-with-address',async(req:Request,res:Response)=>{
    try{
        const {username,password,country,city} = req.body
        await pgClient.query('BEGIN;')
        const result = await pgClient.query('insert into users(username,password) values($1,$2) returning id',[username,password])
        const user_id = result.rows[0].id
        await new Promise(x =>setTimeout(x,10000)) //will stop the flow for 100 sec
        const addressResponse = await pgClient.query('insert into address(user_id,country,city) values($1,$2,$3)',[user_id,country,city])
        await pgClient.query('COMMIT;')
        res.json({message:"created user with address"})
    }catch(err){
        console.log('err ',err)
        res.json({message:err})
    }
})

app.get('/get-user-info-and-address',async(req:Request,res:Response)=>{
    try{
        const {user_id} = req.query
        // 1) bad way to get the data
        // const userDetails = await pgClient.query('select * from users where id = $1',[user_id])
        // const addressDetails = await pgClient.query('select * from address where user_id = $1',[user_id])
        // res.json({
        //     user:userDetails.rows,address:addressDetails.rows
        // })

        // 2) better way to get the data 

        const data = await pgClient.query('select users.id,users.username,users.password,address.city,address.country from users join address on users.id = address.user_id where users.id = $1',[user_id])
        res.json({user:data.rows})
    }catch(err){
        console.log('err ',err)
        res.json({error:err})
    }
})

app.listen(3000,()=>{
    console.log(`server is running at 3000`)
})
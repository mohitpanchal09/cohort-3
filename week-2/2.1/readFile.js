const fs = require('fs')

// const content = fs.readFileSync('test.txt','utf-8') //reads the file synchronously
// console.log(content)

// const testContent2 = fs.readFileSync('test2.txt','utf-8')
// console.log(testContent2)


// //synchronous code 

// const content3 = fs.readFile("test.txt","utf-8",(err,data)=>{
//     console.log('dataaa',data)
// })

fs.readFile('test.txt','utf-8',(err,data)=>{
    console.log(data)
})
fs.readFile('test2.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log('done!')
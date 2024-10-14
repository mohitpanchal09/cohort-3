const fs = require('fs')

function readAndWrite(resolve){
    let content = fs.readFile('a.txt','utf-8',(err,data)=>{
        resolve(data)
    })

}

function cleanFile(){
    return new Promise(readAndWrite)
}

cleanFile().then((content)=>{
    console.log('file cleaned', content)
})
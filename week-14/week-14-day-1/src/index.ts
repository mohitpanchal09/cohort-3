// let x:number | string =1

// x='h'

// console.log(x);


// function greet(name:string){
//     console.log(`hello ${name}`)
// }

// greet('mohit')

// function sum(a:number,b:number):number{
//     return a+b
// }

// console.log(sum(2,3))

// function isLegal(age:number):boolean{
//     if(age>18){
//         return true
//     }
//     return false
// }
// console.log(isLegal(22))

function delayedCall(fn:()=>number){
    setTimeout(fn,1000)
}

delayedCall(function(){
    return 1
})
function setTimeoutPromisified(ms){
    let p = new Promise(resolve=>setTimeout(resolve,ms))
    return p
}

function cb(){
    console.log('3 seconds have passed')
}

setTimeoutPromisified(3000).then(cb)
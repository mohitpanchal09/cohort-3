export function random(len:number){
    const options = "sdfsefwefn3242349wedfewfc234sdfsdfsdfdsfbeher3423235678"
    let ans = ""
    for(let i=0;i++;i<len){
        ans= ans + options[Math.floor(Math.random()*options.length)]
    }
    return ans;
}
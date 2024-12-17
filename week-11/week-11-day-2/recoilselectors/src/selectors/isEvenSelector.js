import { selector } from "recoil";
import { counterAtom } from "../atoms/counterAtom";


export const isEvenSelector = selector({
    key:"isEven",
    get:({get})=>{
        const count = get(counterAtom)
        const isEven = count%2===0
        return isEven
    }
})
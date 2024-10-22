import { useRef } from "react";

export function useDebounce(functionToDebounce){
    const currentClock = useRef()

    const fn=()=>{
        clearTimeout(currentClock.current)
        currentClock.current = setTimeout(functionToDebounce,200)
    }
    return fn

}
import React from "react";
import { useCounter } from "../hooks/useCounter";

function Counter() {
  const { count, increaseCount } = useCounter();
  return <button onClick={increaseCount}>Increase {count}</button>;
}

export default Counter;

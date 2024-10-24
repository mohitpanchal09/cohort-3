import React, { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <Increment />
      <Decrement />
    </div>
  );
}

import React from "react";
import { useCount } from "../contexts/CountContext";

function Decrease() {
  const { setCount } = useCount();
  return <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>;
}

export default Decrease;

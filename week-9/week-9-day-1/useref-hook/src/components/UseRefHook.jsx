import React from "react";
import { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // bad method
    // document.getElementById("name").focus()

    //good method
    inputRef.current.focus();
  };
  return (
    <div>
      <input id="name" type="text" ref={inputRef} />
      <input id="age" type="text" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default UseRefHook;

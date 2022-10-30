// (1)Ref is used in class component and useRef is used in functional component.

import React, { useRef } from "react";

const UseREF = () => {
  const inputRef = useRef();
  const handleInput = () => {
    // alert("function called")
    inputRef.current.value = "10";
    inputRef.current.style.backgroundColor = "#f78f";
    inputRef.current.style.color = "black";
    inputRef.current.style.fontWeight = "bold";
    inputRef.current.style.border = "5px solid black";
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Use ref Hook</h1>

      <input type="text" ref={inputRef} />
      <button onClick={() => handleInput()}>useRef Hook</button>

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default UseREF;

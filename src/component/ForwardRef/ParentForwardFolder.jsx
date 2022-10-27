import React, { useRef } from "react";
import Children from "./Children";
const ParentForwardFolder = () => {
  const inputRef = useRef(null);
  const dataHandler = () => {
    // inputRef.current.value="10";
    inputRef.current.style.backgroundColor = "aqua";
    inputRef.current.style.color = "black";
    inputRef.current.style.fontWeight = "bold";
  };
  return (
    <>
      <h1>Forward Ref</h1>

      <Children ref={inputRef} />
      <button onClick={() => dataHandler()}  style={{backgroundColor: "#3158a8"}}>Click Me</button>
      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default ParentForwardFolder;

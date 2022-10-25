import React, { useState } from "react";

const UseStateHook = () => {
  const [data, setData] = useState("Mofijul");
  return (
    <>
      <h1>Use State Hook</h1>
      <h2>{data}</h2>
      <button onClick={()=>{setData("Haque")}}>Upadte Data</button>

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default UseStateHook;

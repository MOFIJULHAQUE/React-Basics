import React, { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState("124");
  return (
    <>
      <h1>Controlled-Component</h1>
      <h3>{value}</h3>

      <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default ControlledComponent;

import React from "react";
import ChildrenComp from "./ChildrenComp";
const ParentComp = () => {
    const parentFunction=(name)=>{
       console.log(name);
       alert(name);
    }
  return (
    <>
      <h1>Parent Componet </h1>
      
      <ChildrenComp data={parentFunction}/>

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default ParentComp;

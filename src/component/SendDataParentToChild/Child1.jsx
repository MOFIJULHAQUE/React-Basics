import React from "react";
import Child2 from"./Child2"
const Child1 = (props) => {

  const dataToChild2=()=>{
alert("Receive data from child1 ")
  }
  return (
    <>
      <h1>Child1</h1>
      <button onClick={props.data}>Get Data from <b>parent</b> to Child1</button>
      <Child2  toChild2={dataToChild2}/>

    </>
  );
};

export default Child1;

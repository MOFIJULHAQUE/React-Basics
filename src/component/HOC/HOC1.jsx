import React, { useState } from "react";
import "./HOC.css"
const HOC1 = () => {
  return (
    <>
      <h1>HOC-1</h1>
      <Hocomp data={Counter} />
      <Hocomp1 data={Counter} />
      <Hocomp2 data={Counter} />
      <h1>-------------------------------------------------</h1>
    </>
  );
};

function Hocomp(props) {
  return (
    <h2 style={{ backgroundColor: "aqua"  ,color:"red", width:200}}>
      Red
      <props.data />
    </h2>
  );
}
function Hocomp1(props) {
    return (
      <h2 style={{ backgroundColor: "green"  ,color:"balck", width:200}}>
        Green
        <props.data />
      </h2>
    );
  }

  function Hocomp2(props) {
    return (
      <h2 style={{ backgroundColor: "yellow"  ,color:"gray", width:200}}>
        Yellow
        <props.data />
      </h2>
    );
  }

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div  className="counter">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
}
export default HOC1;

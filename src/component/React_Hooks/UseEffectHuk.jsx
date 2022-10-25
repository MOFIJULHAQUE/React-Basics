import React, { useState, useEffect } from "react";

const UseEffectHuk = () => {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(10);
  useEffect(() => {
    // console.log("inside useEffect");
  }, [data]);
  return (
    <>
      <h1>Use Effect Hook</h1>

      <h2>data : {data}</h2>
      <h2>count : {count}</h2>
      <button onClick={() => setData(data + 1)} style={{color:"blue" }}>Data</button>
      <button onClick={() => setCount(count + 3)} style={{color:"red" }}>Count</button>
      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default UseEffectHuk;

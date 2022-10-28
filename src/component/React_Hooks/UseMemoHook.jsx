// Usage of useMemo hook
// Skipping expensive recalculations
// Skipping re-rendering of components
// Memoizing a dependency of another Hook
// Memoizing a function
// It's only used with functional component
// It's working process is as same as pure component

import React, { useState, useMemo } from "react";
const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  //creating a function to check data re rendering and use the use memo
  const useMEMOFunction = useMemo(
    function checkRender() {
      console.log("inside function");
      return count * 4;
    },
    [count] 
  ); //with count dependency on use memoizing function to check data re rendering

  return (
    <>
      <h1>Use Memo Hook</h1>
      <h3>Count1 :- {count}</h3>
      <h3>Count2 :- {count2}</h3>
      <h3>Count3 :- {count3}</h3>
      <h3>checkRender function :- {useMEMOFunction}</h3>{" "}
      {/* "checkRender()" --- check only for count but the function called at every button clicked but we defined the function only for count ......... That's why we have to use "useMEMOFunction" useMemo hook   */}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setCount2(count2 + 5)}>Count</button>
      <button onClick={() => setCount3(count3 + 9)}>Count</button>
      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default UseMemoHook;

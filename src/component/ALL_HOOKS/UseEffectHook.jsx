import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
    //   {/*  targetting title */}
  const [count, setCount] = useState(0);

    //   {/*  targetting title */}
  useEffect(() => {
    document.title = count;
  }, [count]);

  //cleanup the previous data
const [width,setWidth] = useState(window.screen.width);

const currentScreenWidth=()=>{
    setWidth(()=>window.innerWidth)
}

  useEffect(()=>{
    window.addEventListener('resize',currentScreenWidth);
    //here with the help of return we cleanup the previous data and also remove our eveent listner after the it complete the work see the result in inspect->event listners->resize
    return ()=>{
        window.removeEventListener('resize',currentScreenWidth)
    }
  })
  return (
    <>
      <h1>UseEffect Hook</h1>

      {/*  targetting title */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>


      {/*  */}
      <h1><u>Screen width</u></h1>
      <h2>{width}</h2>
    </>
  );
};

export default UseEffectHook;

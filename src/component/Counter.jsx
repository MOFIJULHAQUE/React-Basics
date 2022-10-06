import React, { useState } from 'react';

const Counter=()=>{

    const [counter,setCounter] = useState(0);
    const increment =()=>{
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }
    return(

        <>
            <h1>-----------------------------------</h1>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <h1>↓</h1>

            <button onClick={() => { decrement() }}>Decrement</button>
            <button onClick={()=>{increment()}}>Increment</button>
            <button onClick={() => { reset() }}>Reset</button>
        </>

    )
}
export default Counter;
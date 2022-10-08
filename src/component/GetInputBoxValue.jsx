import React, { useState } from "react";

const GetInputBoxValue = () => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    const getData = (e) => {
        // console.log(e.target.value);
        setData(e.target.value);
        setPrint(false);
    }
    return (
        <>
            <h1>-----------------------------------</h1>
            <h1>Get data from Input Box   </h1>
            <h1>↓</h1>
            {
                print ?<h1>{data}</h1>: null
            }
            <input type="text" onChange={getData} />
            <button onClick={() => { setPrint(!false) }}>Print Data</button>
            <h1>-----------------------------------</h1>
        </>
    )
}
export default GetInputBoxValue;
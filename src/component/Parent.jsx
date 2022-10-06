import React, { useState } from 'react'
import Child from "./Child"

const Parent = () => {


    const [parentData, setParentData] = useState("Data from parent")



    const [childData, geChildtData] = useState("");

    const getDataFromChild = (data) => {
        geChildtData(data);
    }
    return (

        //send data to child

        <>
            <h1>-----------------------------------</h1>
            <h1>↓</h1>
            <h1>{childData}</h1>
            <Child getDataFromChild={getDataFromChild} />
        </>


    )



}

export default Parent
import React,{useState} from 'react'

const Child=(props)=> {
const [dataC,setData]=useState("child <----> data");
    return (
        <div>  
        <h1>Send Child data to parent </h1>
            <button onClick={()=>{
                props.getDataFromChild(dataC);
            }}>Send child data to parent </button>
        </div>
    )
}

export default Child
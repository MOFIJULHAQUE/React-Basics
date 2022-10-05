import React,{useState} from 'react'

const Child=(props)=> {
const [childData,setChildData]=useState("child data");
    return (
        <div>
            <button onClick={()=>{
                props.getDataFromChild(childData)
            }}>Send child data to parent </button>
        
        </div>
    )
}

export default Child
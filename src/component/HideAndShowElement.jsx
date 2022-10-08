import React,{useState} from 'react';

const HideAndShowElement = () => {



    const[status,setStatus]=useState(true);

    return (
        <>
            {
                status ? <h1>Hide And Show Element</h1>:null
            }

            
            
        {/*HideAndShowElement----> With two button */}

            {/*<button onClick={() => {setStatus(true) }}>Show</button>
        <button onClick={() => { setStatus(false) }}>Hide</button>*/}


            <button onClick={() => { setStatus(!status) }}>Toggle</button>
        

            <h1>-----------------------------------</h1>
        </>
    )


}
export default HideAndShowElement;
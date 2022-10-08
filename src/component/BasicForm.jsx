import React, { useState } from 'react';

const BasicForm = () => {

    const [name, setName] = useState("");
    const [option, setOption] = useState("");
    const [tnc, setTnc] = useState(false);

    const getFormData = (e) => {
        console.log(name,option,tnc);
        e.preventDefault();
    }

    return (
        <>
            <h1>Handle Form in React</h1>
            <form onChange={getFormData}>
                <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/><br /><br />
                <select onChange={(e) => setOption(e.target.value)} >
                    <option>Select the Option</option>
                    <option>Mango</option>
                    <option>Banana</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} required />Terms & Conditions<br /><br />
                <button type="submit" onClick={getFormData}>Submit</button>
            </form>


            e.map((name,option,tnc)=>)

            <h1>-----------------------------------</h1>
        </>
    )
}
export default BasicForm
import React, { useState } from "react";
import TodoList from "./TodoList.";

const Todo = () => {
    const [data, setData] = useState([]);
    const inputdata = (input) => {
        console.log([...data, input]);
        setData([...data, input])
    }

    return (
        <>

            <h1>Enter Todo</h1>

            <TodoList inputdata={inputdata} />

            {data.map((text) => {
                return (
                    <div className="todo">
                        <h3>{text}</h3>
                        <>
                            <button>Edit</button>
                            <button onClick={()=>{
                                
                            }}>Delete</button>
                        </>
                    </div>
                )
            })}
        </>
    )

}
export default Todo
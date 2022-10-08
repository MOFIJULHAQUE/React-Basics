import React, { useState } from 'react';

const TodoList = (props) => {
    const [text, setText] = useState("");
    return (
        <>
            <input
                onChange={(e) => {
                    // console.log(e.target.value);
                    setText(e.target.value);
                }}
                type="text"
                placeholder='Enter your todo.........'
            />
            <button
                onClick={() => {
                    props.inputdata(text);
                }}
            >ADD Todo</button>
        </>
    )
}
export default TodoList;
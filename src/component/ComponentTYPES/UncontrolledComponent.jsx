import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputValue = useRef(null);
  const inputValue2 = useRef(null);

  function handleInput(e) {
    e.preventDefault();

    //using useRef
    console.log(inputValue.current.value);
    console.log(inputValue2.current.value);

    //using Id
    let data = document.getElementById("input3").value;
    console.log(data);
  }
  return (
    <>
      <h1>Uncontrolled - Component</h1>

      <form onSubmit={handleInput}>
        <input placeholder="input1" ref={inputValue} />
        <br /> <br />
        <input placeholder="input2" ref={inputValue2} />
        <br /> <br />
        <input placeholder="input3" id="input3" />
        <br /> <br />
        <button>Click</button>
      </form>

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default UncontrolledComponent;

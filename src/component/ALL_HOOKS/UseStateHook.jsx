import React, { useState } from "react";

import "./Hooks.css";

const UseStateHook = () => {
  const [formData, setFormData] = useState({
    //names
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev)=>{
        //here 'prev' clone all the data from useState and [name]:value only change that data which we change other data remaining same see the result in react developer tool
        return {...prev,[name]:value}
    })
    console.log(name, value);
  };
  return (
    <>
    <h1>UseStae Hook</h1>
      <div className="main_conatiner">
        <div className="container_form">
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="name"
            name="username"
            autoComplete="off"
            value={formData.username}
            onChange={handleInput}

            //   onChange
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleInput}

          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleInput}


          />
          <br />
          <br />
          <input
            type="password"
            placeholder="confirm password"
            name="confirm_password"
            autoComplete="off"
            value={formData.confirm_password}
            onChange={handleInput}
          />
          <br />
          <br />
          <button>Sign up</button>
          <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
        </div>
      </div>
      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default UseStateHook;

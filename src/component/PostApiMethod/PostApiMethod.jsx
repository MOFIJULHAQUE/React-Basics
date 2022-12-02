import React, { useState } from "react";

const PostApiMethod = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const saveUserDetails = () => {
    console.log({name, email, contactNumber});

    let data={name,email,contactNumber}
    fetch("https://retoolapi.dev/2rYiON/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result)=>{
console.log("result",result);
    })
  };
  return (
    <>
      <h1>-------------------------------------------------</h1>
      <h1>Post API Method</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        name="name"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        name="name"
        value={contactNumber}
        onChange={(event) => setContactNumber(event.target.value)}
      />
      <br />
      <br />
      <button onClick={saveUserDetails}>SAVE</button>
    </>
  );
};
export default PostApiMethod;

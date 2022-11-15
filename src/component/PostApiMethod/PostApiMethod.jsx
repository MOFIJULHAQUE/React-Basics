import React, { useState } from "react";

const PostApiMethod = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const saveUserDetails=()=>{
    console.log(name,email,contactNumber);
  }
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

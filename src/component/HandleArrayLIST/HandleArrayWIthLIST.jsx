import React from "react";

const HandleArrayWIthLIST = () => {
  //in Array
  const array = ["sam", "ram", "aryan", "kartik"];

  //in Obj
  const array1 = [
    { name: "satm", email: "abc@com", contact: 534 },
    { name: "asam", email: "afgfbc@com", contact: 14534 },
    { name: "gfdsam", email: "agfbc@com", contact: 434 },
    { name: "sream", email: "agfbc@com", contact: 536 },
    { name: "saram", email: "agfbc@com", contact: 5664 },
  ];
  return (
    <>
      <h1>Handle-Array-WIth-LIST</h1>
      <h2>using same kind of data</h2>
      {array.map((item) => {
        return <h3>Name is : {item}</h3>;
      })}
      <h2>Using different kind of data in below table</h2>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
        {array1.map((element) => {
          return (
            <>
              <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.contact}</td>
              </tr>
            </>
          );
        })}
      </table>


      <h1>-------------------------------------------------</h1>
 
    </>
  );
};

export default HandleArrayWIthLIST;

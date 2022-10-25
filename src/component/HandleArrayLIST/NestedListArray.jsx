import React from "react";
import { Table } from "react-bootstrap";

const NestedListArray = () => {
  const array1 = [
    {
      name: "satm",
      email: "abc@com",
      contact: 534,
      address: [
        {
          City: "Nagaon",
          Village: "Panigaon",
          State: "Assam",
          Country: "India",
        },
      ],
    },
    {
      name: "asam",
      email: "afgfbc@com",
      contact: 14534,
      address: [
        {
          City: "Golaghat",
          Village: "Oating",
          State: "Assam",
          Country: "India",
        },
      ],
    },
    {
      name: "gfdsam",
      email: "agfbc@com",
      contact: 534,
      address: [
        {
          City: "Jorhat",
          Village: "Baruah Tinali",
          State: "Assam",
          Country: "India",
        },
      ],
    },
    {
      name: "sream",
      email: "agfbc@com",
      contact: 534,
      address: [
        {
          City: "Sarupathar",
          Village: "Naojan",
          State: "Assam",
          Country: "India",
        },
      ],
    },
    {
      name: "saram",
      email: "agfbc@com",
      contact: 5664,
      address: [
        {
          City: "Diphu",
          Village: "Bokajan",
          State: "Assam",
          Country: "India",
        },
      ],
    },
  ];
  return (
    <>
      <h2>List with nested Array</h2>
      {/* Doubt 🤔🤔🤔🤔🤔--- why not working */}
      {/* <Table variant="dark">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
          {array1.map((elem,index) => {
            <tr key={index}>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.contact}</td>
            </tr>;
          })}
          
        </tbody>
      </Table> */}{" "}
      {/* Doubt 🤔🤔🤔🤔🤔--- why not working */}



      
      {/* Doubt 🤔🤔🤔🤔🤔--- why its working */}
      <Table striped variant="dark">

        <tbody>
          <tr>
            <th>S. NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
          {array1.map((elem, index) => (
            <tr key={index}>
                <td>{index+1}</td>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.contact}</td>
      {/* Doubt 🤔🤔🤔🤔🤔--- why its working */}

              <td>
                <Table variant="light"> {/* Doubt 🤔🤔🤔🤔🤔--doubt in dark & light varient */}
                  <tbody>
                    {elem.address.map((data) => {
                      return (
                        <>
                          <td>{data.City}</td>
                          <td>{data.Village}</td>
                          <td>{data.State}</td>
                          <td>{data.Country}</td>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default NestedListArray;

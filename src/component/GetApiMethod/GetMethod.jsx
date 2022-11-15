import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const GetMethod = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://retoolapi.dev/2rYiON/data").then((result) => {
      result.json().then((response) => {
        // console.log(response);
        setData(response);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
    <h1>Get API Method</h1><br/>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name }</td>
                <td>{item.email }</td>
                <td>{item.contact }</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default GetMethod;

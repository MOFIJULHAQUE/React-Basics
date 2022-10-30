import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const GetMethod = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("+").then((result) => {
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
            <th>id</th>
            <th>Category</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.category.toUpperCase()}</td>
                <td>{item.title.slice(0,20).toUpperCase()}</td>
                <td>{item.image}</td>
                <td>{item.description.slice(0,20)}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default GetMethod;

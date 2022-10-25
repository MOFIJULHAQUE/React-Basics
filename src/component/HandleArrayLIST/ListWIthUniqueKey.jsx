import React from "react";
import { Table } from "react-bootstrap";

const ListWIthUniqueKey = () => {
  const array1 = [
    { name: "satm", email: "abc@com", contact: 534 },
    { name: "asam", email: "afgfbc@com", contact: 14534 },
    { name: "gfdsam", email: "agfbc@com", contact: 534 },
    { name: "sream", email: "agfbc@com", contact: 534 },
    { name: "saram", email: "agfbc@com", contact: 5664 },
  ];
  return (
    <>
      <h2>Using different kind of data in below table with unique key</h2>
      <h2>BootStrap Table</h2>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
          {array1.map((elem, index) => (
            <tr key={index}>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>With condition in table element</h2>
      <h2>BootStrap Table</h2>

      <Table striped variant="dark">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
          {array1.map((elem, index) =>
            elem.contact === 534 ? (
              <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>

      <h1>-------------------------------------------------</h1>
    </>
  );
};

export default ListWIthUniqueKey;

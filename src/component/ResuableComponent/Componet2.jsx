import React from "react"
import {Table} from "react-bootstrap"
const Componet2 = (props) => {
  return (
    <>
     

<Table variant="dark">
    <tbody>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        <tr>
            <td>{props.datapass.name}</td>
            <td>{props.datapass.email}</td>
            <td>{props.datapass.contact}</td>
        </tr>
    </tbody>
</Table>

    </>
  )
}

export default Componet2

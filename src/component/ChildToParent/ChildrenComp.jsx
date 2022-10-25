
import React from 'react'

const ChildrenComp = (props) => {
    const name ="Mofijul Haque";
  return (
    <>
      <h3>Children Component</h3>
      <button onClick={()=>props.data(name)}>Update Data</button>
    </>
  )
}

export default ChildrenComp

import React from 'react'

const Child2 = (props) => {
  return (
    <div>
      <h1>Child2</h1>
      <button onClick={props.toChild2}>Get Data from <b>Child1</b> to Child2</button>

      <h1>-----------------------------------</h1>
    </div>
  )
}

export default Child2
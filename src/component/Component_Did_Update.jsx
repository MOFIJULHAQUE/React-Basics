import React from "react";

class Component_Did_Update extends React.Component {
  constructor() {
    super();
    this.state={
        name:"React is a"
    }
    // console.log("constructor");
  }
  componentDidUpdate(){
    // console.log("componentDidUpdate");
  }
  render() {
    // console.log("render");
    return (
      <>
        <h1>Component_Did_Update</h1>
        <h2>{this.state.name} </h2>
        <button onClick={()=>{this.setState({name:"JS Library"})}}>Update</button>

        <h1>-------------------------------------------------</h1>
      </>
    );
  }
}
export default Component_Did_Update;

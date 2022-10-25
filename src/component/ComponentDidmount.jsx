import React, { Component } from "react";

class ComponentDidmount extends Component {
  constructor() {
    super();
    this.state={
      name : "Mofijul"
    }
    // console.log("constructor section");
  }
 
  render() {
    // console.log("render Section");
    return (
      <>
        <h1>
          Componet Did Mount
          <br /> Check the result in inspect-console -- {this.state.name}
        </h1>
        <button onClick={()=>{this.setState({name:"Haque"})}}>Update Name</button>

        <h1>----------------------------------------------------</h1>
      </>
    );
  }
}
export default ComponentDidmount;

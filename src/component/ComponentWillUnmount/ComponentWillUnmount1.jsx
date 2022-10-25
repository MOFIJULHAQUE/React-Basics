import React, { Component } from "react";
import ComponentWillUnmount2 from "./ComponentWillUnmount2";
class ComponentWillUnmount1 extends Component {
    constructor(){
        super();
        this.state={
            display : true
        }
    }
  render() {
   
    return (
      <>
      <h1>Component-Will-Unmount</h1>
      {
        this.state.display ? <ComponentWillUnmount2 /> : <h4>Data removed</h4>
      }
        
        <button onClick={()=>{this.setState({display:!this.state.display})}}>UPDATE</button>

        <h1>-------------------------------------------------</h1>
      </>
    );
  }
}

export default ComponentWillUnmount1;

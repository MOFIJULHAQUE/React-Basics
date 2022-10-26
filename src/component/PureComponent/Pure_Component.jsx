import React, { PureComponent } from "react";

export class Pure_Component extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    // console.log("render");
    return (
      <>
        <h1>Pure Component</h1>
        <h2>{this.state.count}</h2>

        <button onClick={()=>this.setState({count:this.state.count})}>Counter</button>
        <h1>-------------------------------------------------</h1>
      </>
    );
  }
}

export default Pure_Component;

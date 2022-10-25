import React, { Component } from "react";

export class ShouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    // console.log(this.state.count);

    //importance of    shouldComponentUpdate
    if (this.state.count > 1) return true;
  }
  render() {
    return (
      <>
        <h1>ShouldComponentUpdate</h1>

        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Counter
        </button>

        <h1>---------------------------------------------------</h1>
      </>
    );
  }
}

export default ShouldComponentUpdate;

import React, { Component, createRef } from "react";

export class REF extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  //   componentDidMount(){
  //     console.log(this.inputRef);
  //   }
  //   with componentDidMount() we find the DOM becaues this life cycle method reload the html

  checkRef() {
    // console.log(this.inputRef);
    console.log(this.inputRef.current.value);
    this.inputRef.current.value = "1021222221";
    this.inputRef.current.style.color = "black";
    this.inputRef.current.style.backgroundColor = "#ffff";
    this.inputRef.current.style.fontWeight = "bolder";
    this.inputRef.current.style.fontWeight = "bolder";
    // this.inputRef.current.style.display = "none";
    this.inputRef.current.focus();
  }
  render() {
    return (
      <>
        <h1>Ref in React</h1>

        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.checkRef()}>Check Ref</button>

        <h1>-------------------------------------------------</h1>
      </>
    );
  }
}

export default REF;

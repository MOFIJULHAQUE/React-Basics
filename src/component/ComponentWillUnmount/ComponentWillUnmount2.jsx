
import React from 'react'

class ComponentWillUnmount2 extends React.Component  {
  componentWillUnmount(){
    console.log("inside componentWillUnmount");
    // alert("data removed ")
  }
    render() {
        return (
             <>
             <h4>ComponentWillUnmount2 - component</h4>
             </>
        );
    }
}

export default ComponentWillUnmount2

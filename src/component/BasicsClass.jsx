import { Component } from "react";

export class BasicsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // brand: "Ford",
            // model: "Mustang",
            // color: "red",
            // year: 1964,
            isToggleOn: false,
        }
    }

    handleClick = (click) => {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        })
    }
    render() {

        return (
            <div>
                {
                    //         <h1>this is a class {this.state.brand} component {this.props.name} </h1>
                    //         <h1>this {this.state.model} is a class component {this.props.age} </h1>
                    //         <h1>this {this.state.year} is a class {this.state.color} component {this.props.place} </h1>
                }
                <button onClick={this.handleClick}> {this.state.isToggleOn ? "ON" : "OFF"} </button>


            </div>
        )
    }
}
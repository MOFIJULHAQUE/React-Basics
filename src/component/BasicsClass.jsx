import { Component } from "react";

export class BasicsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      name: "Mofijul",
    };
  }

  handleClick = (click) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  dataUpdate = () => {
    this.setState({
      name: (this.state = "Haque"),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {" "}
          {this.state.isToggleOn ? "ON" : "OFF"}{" "}
        </button>
        <h1>{this.state.name}</h1>
        <button
          onClick={() => {
            this.dataUpdate();
          }}
        >
          Data Update
        </button>
      </div>
    );
  }
}

import React from "react";
import { Component } from "react";

class Add extends Component {
  constructor() {
    super();
    this.state = { newItem: "" };
  }
  render() {
    return (
      <div>
          <span className="name">new {this.props.type} : </span>
        <input
          type="text"
          value={this.state.newItem}
          onChange={(event) => {
            this.setState({ newItem: event.target.value });
          }}
        /> 
        <button onClick={() => this.props.onAdd(this.state.newItem)}>add</button>
      </div>
    );
  }
}

export default Add;

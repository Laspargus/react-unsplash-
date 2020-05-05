import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="mt-5">
        <label>Picture theme :</label>
        <input
          class="form-control form-control-lg"
          type="text"
          value={this.state.value}
          onChange={this.props.handleChange}
          placeholder=".form-control-lg"
        />
      </form>
    );
  }
}

export default Form;

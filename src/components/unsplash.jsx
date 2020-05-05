import Form from "./form/form";
import Api from "./api/api";

import React, { Component } from "react";

class Unsplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Kangoorou",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  // handleSubmit = (event) => {
  //   alert("Le nom a été soumis : " + this.state.value);
  //   event.preventDefault();
  // };

  render() {
    return (
      <div>
        <Form handleChange={this.handleChange} />
        <Api wordRequest={this.state.value} />
      </div>
    );
  }
}

export default Unsplash;

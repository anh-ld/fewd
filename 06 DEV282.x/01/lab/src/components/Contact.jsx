import React, { Component } from 'react';
import { Prompt } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleClick = () => {
    this.setState({value: ""});
  }

  render() {
    return (
      <div>
        Le Duy Anh<br />
        <input
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>
          <button onClick={this.handleClick}>
            Submit
          </button>
        </div>
        <Prompt
          when={this.state.value !== ""}
          message="Leave without sending messages?"
        />
      </div>
    );
  }
}

export default Contact;
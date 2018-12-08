import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  addItem = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.price);
    this.setState({name: "", price: ""});
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            value={this.state.price}
            name="price"
            onChange={this.handleChange}
            placeholder="Price"
          />
          <button
            onClick={this.addItem}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
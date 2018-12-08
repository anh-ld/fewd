import React, { Component } from 'react';

class Item extends Component {
  deleteItem = () => {
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <div className="item">
        Name: {this.props.name}. Price: {this.props.price}
        <button
          onClick={this.deleteItem}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
import React, { Component } from 'react';
import Input from './Input';
import Item from './Item';

class ItemList extends Component {
  render() {
    return (
      <div>
        <Input onAdd={this.props.onAdd}/>
        {this.props.items.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              price={item.price}
              index={index}
              onDelete={this.props.onDelete}
            />
          )
        })}
      </div>
    );
  }
}

export default ItemList;
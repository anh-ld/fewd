import React, { Component } from 'react';

class Todos extends Component {
  render() {
    const todoList = this.props.todos.length ? (
      this.props.todos.map((todo) => {
        return (
          <div className="collection-item" key={todo.id}>
            <span
              className="green-text item"
              onClick={() => this.props.deleteTodo(todo.id)}
            >
              {todo.content}
            </span>
          </div>
        )
      })
    ) : (
      <p className="center green-text">You have no to-dos left, yay!</p>
    )
    return (
      <div className="todos collection">
        {todoList}
      </div>
    );
  }
}

export default Todos;
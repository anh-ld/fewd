import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Play mario kart"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    })
    this.setState({todos});
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center teal-text">To-Do List</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import TodoInput from "./components/TodoInput.js";
import TodoItem from "./components/TodoItem.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          text: "Your to-do items will appear here."
        }
      ],
      nextId: 1
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1
    });
  }

  removeTodo(id) {
    // let todos = this.state.todos.slice();
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

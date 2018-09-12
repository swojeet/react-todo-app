import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import TodoInput from "./components/TodoInput.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Make dinner tonight" },
        { id: 1, text: "Learn to make react app" },
        { id: 2, text: "Fold the laundry." }
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo added: ", todoText);
  }

  removeTodo(id) {
    console.log("Removing: " + id);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;

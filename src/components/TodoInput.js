import React from "react";
import "./TodoInput.css";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo_name) {
    // Ensure the todo text isn't empty
    if (todo_name.length > 0) {
      this.props.addTodo(todo_name);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="todo_input_btn">
        <input
          type="text"
          value={this.state.value}
          name="todo_name"
          onChange={this.handleChange}
          placeholder="Jot something down"
        />
        <button
          className="btn btn-primary"
          onClick={() => this.addTodo(this.state.value)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;

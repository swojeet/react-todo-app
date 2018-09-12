import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button
          className="removeTodo"
          onClick={e => this.removeTodo(this.props.id)}
        >
          x
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}

export default TodoItem;

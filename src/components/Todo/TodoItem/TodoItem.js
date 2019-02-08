import React, { Component } from "react";

import styles from "./todoItem.module.sass";

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div
        className={
          styles.todoItem + (completed ? " " + styles.isCompleted : "")
        }
      >
        <input
          type="checkbox"
          className="todoItemStatus"
          onChange={this.props.markCompleted.bind(this, id)}
          checked={completed}
        />
        <p>{title}</p>
        <button type="button" onClick={this.props.delTodo.bind(this, id)}>
          Remove
        </button>
      </div>
    );
  }
}

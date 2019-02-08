import React, { Component } from "react";

import styles from "./todoForm.module.sass";

export default class TodoForm extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ title: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <>
        <form className={styles.todoForm} onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="What To Do ..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

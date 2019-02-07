import React, { Component } from "react";

import styles from "./todoForm.module.sass";

export default class TodoForm extends Component {
  render() {
    return (
      <>
        <form className={styles.todoForm}>
          <input type="text" placeholder="What To Do ..." />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

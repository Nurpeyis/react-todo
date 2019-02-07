import React, { Component } from "react";

import styles from "./todoItem.module.sass";

export default class TodoItem extends Component {
  render() {
    return (
      <div className={styles.todoItem}>
        <input type="checkbox" className="todoItemStatus" />
        <p>Go To Shop</p>
        <a href="#">Remove</a>
      </div>
    );
  }
}

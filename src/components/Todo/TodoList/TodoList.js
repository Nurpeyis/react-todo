import React, { Component } from "react";

import styles from "./todoList.module.sass";

import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div className={styles.todoWrap}>
        <h1>Todo Manager</h1>
        <TodoForm />

        <div className={styles.todoList}>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import styles from "./todoList.module.sass";

import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div className={styles.todoWrap}>
        <h1>Todo Manager</h1>
        <TodoForm addTodo={this.props.addTodo} />

        <div className={styles.todoList}>
          {this.props.todoList.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                markCompleted={this.props.markCompleted}
                delTodo={this.props.delTodo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

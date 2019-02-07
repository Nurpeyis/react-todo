import React, { Component } from "react";

import TodoList from "../components/Todo/TodoList";

export default class Todo extends Component {
  async componentDidMount() {
    try {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const todoList = await result.json();
      console.log(todoList);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <TodoList />
      </>
    );
  }
}

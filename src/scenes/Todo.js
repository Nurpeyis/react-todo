import React, { Component } from "react";

import TodoList from "../components/Todo/TodoList";

export default class Todo extends Component {
  state = {
    todoList: []
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const todoList = await result.json();
      const completedList = [];
      const uncompletedList = [];

      todoList.map(todo => {
        if (todo.completed) {
          completedList.push(todo);
        } else {
          uncompletedList.push(todo);
        }
      });

      const todoListMerged = [].concat(...[uncompletedList, completedList]);

      this.setState({
        todoList: todoListMerged
      });
    } catch (error) {
      console.log(error);
    }
  }

  markCompleted = id => {
    let clickedTodo = this.state.todoList.find(todo => todo.id === id);
    let otherTodos = this.state.todoList.filter(todo => todo.id !== id);

    if (!clickedTodo.completed) {
      clickedTodo.completed = !clickedTodo.completed;
      otherTodos.push(clickedTodo);
    } else {
      clickedTodo.completed = !clickedTodo.completed;
      otherTodos.unshift(clickedTodo);
    }

    this.setState({
      todoList: otherTodos
    });
  };

  delTodo = async id => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json"
      }
    });

    let todoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: todoList
    });
  };

  addTodo = title => {};

  render() {
    return (
      <>
        <TodoList
          todoList={this.state.todoList}
          markCompleted={this.markCompleted}
          delTodo={this.delTodo}
        />
      </>
    );
  }
}

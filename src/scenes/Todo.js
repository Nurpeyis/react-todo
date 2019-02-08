import React, { Component } from "react";

import TodoList from "../components/Todo/TodoList";

export default class Todo extends Component {
  state = {
    todoList: []
  };

  queryUrl = "https://jsonplaceholder.typicode.com/todos";
  queryHeaders = {
    Accept: "application/json, text/plain, */*",
    "Content-type": "application/json; charset=UTF-8"
  };

  async componentDidMount() {
    try {
      const result = await fetch(`${this.queryUrl}?_limit=5`);
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

  markCompleted = async id => {
    let clickedTodo = this.state.todoList.find(todo => todo.id === id);
    clickedTodo.completed = !clickedTodo.completed;

    let otherTodos = this.state.todoList.filter(todo => todo.id !== id);

    try {
      let result = await fetch(`${this.queryUrl}/${id}`, {
        method: "PUT",
        headers: this.queryHeaders,
        body: JSON.stringify(clickedTodo)
      });
      clickedTodo = await result.json();

      if (clickedTodo.completed) {
        otherTodos.push(clickedTodo);
      } else {
        otherTodos.unshift(clickedTodo);
      }

      this.setState({
        todoList: otherTodos
      });
    } catch (error) {
      console.log(error);
    }
  };

  delTodo = async id => {
    await fetch(`${this.queryUrl}/${id}`, {
      method: "DELETE",
      headers: this.queryHeaders
    });

    let todoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: todoList
    });
  };

  addTodo = async title => {
    try {
      let result = await fetch(this.queryUrl, {
        method: "POST",
        headers: this.queryHeaders,
        body: JSON.stringify({
          title: title,
          completed: false
        })
      });

      const newTodo = await result.json();
      const todoList = this.state.todoList;
      todoList.unshift(newTodo);

      this.setState({ todoList: todoList });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <TodoList
          todoList={this.state.todoList}
          markCompleted={this.markCompleted}
          delTodo={this.delTodo}
          addTodo={this.addTodo}
        />
      </>
    );
  }
}

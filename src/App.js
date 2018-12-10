import React, { Component } from "react";
import axios from "axios";
import List from "./components/List";
import InputTodo from "./components/InputTodo";
import "./App.css";

class App extends Component {
  // 할일 목록 상태 데이터
  state = {
    todos: []
  };
  // DB에서 할일 목록 가져와 상태 변경하기
  fetchTodos = () => {
    axios.get("http://localhost:4000/api/todos").then(res => {
      this.setState({
        todos: res.data
      });
    });
  };
  // 컴포넌트가 마운트되면 DB에서 할일 목록 가져와 상태 변경하기
  componentDidMount() {
    this.fetchTodos();
  }
  // DB에서 기존 할일 삭제한 후 할일 목록 가져와 상태 변경하기
  deleteTodo = id => {
    axios.delete("http://localhost:4000/api/todos/" + id).then(res => {
      this.fetchTodos();
    });
  };
  // DB에서 기존 할일 완료여부 수정 후 할일 목록 가져와 상태 변경하기
  doneToggle = id => {
    const todo = this.state.todos.find(todo => todo._id === id);
    axios
      .put("http://localhost:4000/api/todos/" + id, { done: !todo.done })
      .then(res => {
        this.fetchTodos();
      });
  };
  // DB에 신규 할일 추가한 후 할일 목록 가져와 상태 변경하기
  addTodo = todo => {
    todo.done = false;
    axios.post("http://localhost:4000/api/todos", todo).then(res => {
      this.fetchTodos();
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo List App</h1>
        <List
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          doneToggle={this.doneToggle}
        />
        <InputTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

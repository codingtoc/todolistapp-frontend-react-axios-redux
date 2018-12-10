import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    todo: ""
  };
  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      todo: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
            placeholder="입력 후 엔터!"
          />
        </form>
      </div>
    );
  }
}

export default InputTodo;

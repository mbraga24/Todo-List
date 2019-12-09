import React, { Component } from 'react'
import './NewTodoForm.css'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Computed Property
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false })
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task"></label>
        <input 
        id="task"
        name="task"
        value={this.state.task}
        type="text" 
        onChange={this.handleChange}
        placeholder="Add Todo" />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;
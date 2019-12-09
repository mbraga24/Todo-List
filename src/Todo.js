import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleRemove = this.handleRemove.bind(this); 
    this.toggleForm = this.toggleForm.bind(this);  
    this.handleChange = this.handleChange.bind(this);  
    this.handleUpdate = this.handleUpdate.bind(this);  
    this.handleToggle = this.handleToggle.bind(this);  
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    // Pass new task data up to the parent
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div class="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <label>Edit</label>
            <input
            name="task" 
            type="text" 
            value={this.state.task}
            onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
      <div class="Todo">
        <li onClick={this.handleToggle} className={this.props.completed ? "Todo-task completed" : "Todo-task"}>
          {this.props.task} 
        </li>
        <div className="Todo-buttons">
          <button onClick={this.toggleForm}>
            <i class="fas fa-edit"></i>
          </button>
          <button onClick={this.handleRemove}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      )
    }
    return result
  }
}

export default Todo;
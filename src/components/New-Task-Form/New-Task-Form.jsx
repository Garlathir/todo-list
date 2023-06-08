import React from 'react'
import PropTypes from 'prop-types'
import './New-Task-Form.css'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
  }

  onLabelChange = (e) => {
    this.setState({ label: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { addItem } = this.props
    const { label } = this.state
    addItem(label)
    this.setState({ label: '' })
  }

  render() {
    const { label } = this.state
    return (
      <header className="header">
        <h1>Todos</h1>
        <form
          className="new-todo-form"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            onChange={this.onLabelChange}
            value={label}
            className="new-todo"
            placeholder="Task"
          />
          {/* <input
            type="text"
            className="new-todo-form__timer"
            placeholder="Min"
          />
          <input
            type="text"
            className="new-todo-form__timer"
            placeholder="Sec"
          /> */}
        </form>
      </header>
    )
  }
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default NewTaskForm

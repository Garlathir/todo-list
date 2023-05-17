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
      <form onSubmit={this.onSubmit}>
        <h1>Todos</h1>
        <input
          type="text"
          onChange={this.onLabelChange}
          value={label}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default NewTaskForm

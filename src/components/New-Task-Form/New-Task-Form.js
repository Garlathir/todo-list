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
    const { title, placeholder } = this.props
    const { label } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>{title}</h1>
        <input type="text" onChange={this.onLabelChange} value={label} className="new-todo" placeholder={placeholder} />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  addItem: PropTypes.func.isRequired,
}

NewTaskForm.defaultProps = {
  placeholder: 'What needs to be done?',
  title: 'Todos',
}

export default NewTaskForm

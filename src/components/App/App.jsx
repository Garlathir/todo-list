import React from 'react'

import NewTaskForm from '../New-Task-Form'
import TaskList from '../Task-List'
import Footer from '../Footer'

import './App.css'

class App extends React.Component {
  maxId = 100

  constructor(props) {
    super(props)
    this.state = {
      todoData: [],
      filter: 'All',
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const copyArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return { todoData: copyArray }
    })
  }

  addItem = (string) => {
    if (string.length > 0 && string.trim() !== '') {
      const newItem = this.createTask(string)
      this.setState(({ todoData }) => {
        const copyArray = [...todoData, newItem]
        return { todoData: copyArray }
      })
    }
  }

  toggleDone = (ident, data) => {
    this.setState(({ todoData }) => {
      const resultArray = todoData.map((element) => {
        if (ident === element.id) {
          element.completed = data
        }
        return element
      })
      return { todoData: resultArray }
    })
  }

  toggleEdit = (ident) => {
    this.setState(({ todoData }) => {
      const resultArray = todoData.map((element) => {
        if (ident === element.id) element.edit = !element.edit
        return element
      })
      return { todoData: resultArray }
    })
  }

  editItem = (ident, e) => {
    const renameTask = e.target.value
    this.setState(({ todoData }) => {
      const resultArray = todoData.map((todo) => {
        if (ident === todo.id) todo.label = renameTask
        return todo
      })
      return { todoData: resultArray }
    })
  }

  changeFilter = (data) => {
    this.setState({ filter: data })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const resultArray = todoData.filter((todo) => !todo.completed)
      return { todoData: resultArray }
    })
  }

  onEditSubmit = (id, e) => {
    e.preventDefault()
    this.toggleEdit(id)
  }

  createTask(text) {
    return {
      label: text,
      id: this.maxId++,
      completed: false,
      date: new Date(),
      edit: false,
    }
  }

  filteredItems() {
    const { todoData, filter } = this.state
    return todoData.filter(({ completed }) => {
      if (filter === 'All') {
        return true
      }
      if (filter === 'Completed') {
        return completed === true
      }
      return completed === false
    })
  }

  render() {
    const { todoData, filter } = this.state
    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <section className="main">
          <TaskList
            todoData={this.filteredItems()}
            deleteItem={this.deleteItem}
            toggleDone={this.toggleDone}
            toggleEdit={this.toggleEdit}
            editItem={this.editItem}
            onEditSubmit={this.onEditSubmit}
          />
          <Footer
            count={todoData.filter(({ completed }) => !completed).length}
            filter={filter}
            changeFilter={this.changeFilter}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    )
  }
}

export default App

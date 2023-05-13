import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

import './Task-List.css'

function TaskList({ todoData, deleteItem, toggleDone, toggleEdit, editItem, onEditSubmit }) {
  return (
    <ul className="todo-list">
      {todoData.map((todo) => (
        <Task
          key={todo.id}
          toggleDone={toggleDone}
          editItem={editItem}
          toggleEdit={() => toggleEdit(todo.id)}
          deleteItem={() => deleteItem(todo.id)}
          onEditSubmit={onEditSubmit}
          todo={todo}
          date={todo.date}
          edit={todo.edit}
        />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
}

TaskList.defaultProps = {}

export default TaskList

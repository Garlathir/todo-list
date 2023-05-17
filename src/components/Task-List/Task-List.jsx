import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

import './Task-List.css'

function TaskList({ todoData, deleteItem, toggleDone, toggleEdit, editItem, onEditSubmit }) {
  return (
    <ul className="todo-list">
      {todoData.map((todo) => (
        <Task
          deleteItem={() => deleteItem(todo.id)}
          toggleDone={toggleDone}
          toggleEdit={() => toggleEdit(todo.id)}
          editItem={editItem}
          onEditSubmit={onEditSubmit}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      completed: PropTypes.bool,
      edit: PropTypes.bool,
      date: PropTypes.instanceOf(Date),
    })
  ),
  deleteItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  todoData: [],
}

export default TaskList

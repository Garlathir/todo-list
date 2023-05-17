import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import KG from 'date-fns/locale/en-AU'

import './Task.css'

function Task({ todo, deleteItem, toggleDone, toggleEdit, editItem, onEditSubmit }) {
  const { label, id, completed, date, edit } = todo
  let classNames = ''
  if (completed) {
    classNames += 'completed'
  }
  if (edit) {
    classNames = 'editing'
  }
  return (
    <div>
      <li className={classNames}>
        <div className="view">
          <input
            id={id}
            className="toggle"
            type="checkbox"
            onChange={(e) => toggleDone(id, e.target.checked)}
            checked={completed}
          />
          <label htmlFor={id}>
            <span className="description">{label}</span>
            <span className="created">{`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              locale: KG,
              addSuffix: true,
            })}`}</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={toggleEdit} aria-label="Edit" />
          <button type="button" className="icon icon-destroy" onClick={deleteItem} aria-label="Delete" />
        </div>
      </li>
      {edit && (
        <form onSubmit={(e) => onEditSubmit(id, e)}>
          <input type="text" className="edit" value={label} onChange={(e) => editItem(id, e)} />
        </form>
      )}
    </div>
  )
}

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    completed: PropTypes.bool,
    edit: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }),
  deleteItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
}

Task.defaultProps = {
  todo: {},
}

export default Task

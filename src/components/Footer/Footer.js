import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../Tasks-Filter'
import './Footer.css'

function Footer({ count, filter, changeFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter filter={filter} changeFilter={changeFilter} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  count: PropTypes.number,
  clearCompleted: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
}

Footer.defaultProps = {
  count: 0,
  filter: 'All',
}

export default Footer

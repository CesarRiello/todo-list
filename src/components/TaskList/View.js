import React, { Fragment } from 'react'
import Task from 'components/Task'
import TaskFilter from 'components/TaskFilter'
import { NoTask } from 'components/Task/Styles'
import PropTypes from 'prop-types'

const View = ({ tasks, tags, actions, filters }) => (
  <Fragment>
    <TaskFilter tags={tags} actions={actions} filters={filters} />

    {tasks.length ? (
      <div>
        {tasks.map(t => (
          <Task key={t.id} task={t} actions={actions} />
        ))}
      </div>
    ) : (
      <NoTask>
        <div>
          <i className="fa fa-tasks"> </i>
        </div>
        <p>No tasks left</p>
      </NoTask>
    )}
  </Fragment>
)

View.defaultProps = {
  tags: [],
  tasks: []
}

View.propTypes = {
  tags: PropTypes.array,
  tasks: PropTypes.array,
  actions: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired
}

export default View

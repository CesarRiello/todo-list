import React, { Fragment } from 'react'
import Task from 'components/Task'
import TaskFilter from 'components/TaskFilter'
import TaskListControls from 'components/TaskListControls'
import { NoTask } from 'components/Task/Styles'
import PropTypes from 'prop-types'

const View = props => (
  <Fragment>
    {props.tasks.length ? (
      <div>
        <TaskFilter {...props} />
        {props.tasks.map(t => (
          <Task key={t.id} task={t} actions={props.actions} />
        ))}
        <TaskListControls {...props}></TaskListControls>
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
  tasks: []
}

View.propTypes = {
  tasks: PropTypes.array,
  actions: PropTypes.object.isRequired
}

export default View

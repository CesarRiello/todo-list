import React, { Fragment } from 'react'
import TaskForm from 'components/TaskForm'
import { TaskConsumer } from 'components/Context'
import Title from 'components/Title'
import Main from 'components/Main'
import PropTypes from 'prop-types'

const TaskEdit = ({ history }) => (
  <Main>
    <TaskConsumer>
      {props => (
        <Fragment>
          <Title>{props.task.id ? 'Edit' : 'Create'} Task</Title>
          <TaskForm {...props} history={history} />
        </Fragment>
      )}
    </TaskConsumer>
  </Main>
)

TaskEdit.defaultProps = {
  task: {
    name: '',
    isCompleted: false,
    remind: 0
  }
}
TaskEdit.propTypes = {
  history: PropTypes.object.isRequired,
  task: PropTypes.object
}

export default TaskEdit

import React from 'react'
import TaskForm from 'components/TaskForm'
import { TaskConsumer } from 'components/Context'
import Title from 'components/Title'
import Main from 'components/Main'
import PropTypes from 'prop-types'

const TaskEdit = ({ history }) => (
  <Main>
    <Title>Edit Task</Title>

    <TaskConsumer>{props => <TaskForm {...props} history={history} />}</TaskConsumer>
  </Main>
)

TaskEdit.propTypes = {
  history: PropTypes.object.isRequired
}

export default TaskEdit

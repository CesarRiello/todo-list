import React from 'react'
import TaskForm from 'components/TaskForm'
import { TaskConsumer } from 'components/Context'
import Title from 'components/Title'
import Main from 'components/Main'

const TaskEdit = ({ history }) => (
  <Main>
    <Title>Edit Task</Title>

    <TaskConsumer>{props => <TaskForm {...props} history={history} />}</TaskConsumer>
  </Main>
)

export default TaskEdit

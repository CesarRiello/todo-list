import React from 'react'
import TaskList from 'components/TaskList'
import { TaskConsumer } from 'components/Context'
import Main from 'components/Main'
import Title from 'components/Title'

const Tasks = ({ history }) => (
  <Main>
    <Title>Tasks</Title>
    <TaskConsumer>{props => <TaskList {...props} history={history} />}</TaskConsumer>
  </Main>
)

export default Tasks

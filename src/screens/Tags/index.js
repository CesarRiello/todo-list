import React from 'react'
import TagsForm from 'components/TagsForm'
import { TaskConsumer } from 'components/Context'
import Title from 'components/Title'
import Main from 'components/Main'

const Tags = () => (
  <Main>
    <Title>Edit Tags</Title>
    <TaskConsumer>{props => <TagsForm {...props} />}</TaskConsumer>
  </Main>
)

export default Tags

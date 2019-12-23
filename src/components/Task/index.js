import React from 'react'
import { Box, TaskDate, TaskName } from './Styles'
import { CloseBtn, CheckBtn, Button } from 'components/Buttons/'
import Tag from 'components/Tag/'
import PropTypes from 'prop-types'

const Task = ({ task, actions }) => {
  task = task || {}
  return (
    <Box>
      <CheckBtn
        checked={task.isCompleted}
        toggle={() => {
          actions.update({ ...task, isCompleted: !task.isCompleted })
        }}
      />

      <Button
        block
        onClick={() => {
          actions.edit(task)
        }}
      >
        <TaskName>{task.name}</TaskName>
        <TaskDate>{task.forecast}</TaskDate>
      </Button>

      <Tag tag={task.tag} position="absolute" />

      <CloseBtn
        position="absolute"
        close={() => {
          actions.remove(task)
        }}
      />
    </Box>
  )
}

Task.defaultProps = {
  task: {
    name: '',
    tag: '',
    isCompleted: false
  }
}

Task.propTypes = {
  actions: PropTypes.object.isRequired,
  task: PropTypes.object
}

export default Task

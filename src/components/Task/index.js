import React from 'react'
import { Box, Text } from './Styles'
import { CloseBtn, CheckBtn } from 'components/Buttons/'
import Tag from 'components/Tag/'
import PropTypes from 'prop-types'

const Task = ({ task, actions }) => {
  task = task || {}
  return (
    <Box>
      <CheckBtn
        checked={task.isCompleted}
        toggle={() => {
          actions.updateTask({ ...task, isCompleted: !task.isCompleted })
        }}
      />

      <Text
        onClick={() => {
          actions.editTask(task)
        }}
      >
        {task.name}
      </Text>

      <Tag tag={task.tag} position="absolute" />

      <CloseBtn
        position="absolute"
        close={() => {
          actions.removeTask(task.id)
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
  task: PropTypes.string
}

export default Task

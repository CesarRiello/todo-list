import React from 'react'
import { Box, Text } from './Styles'
import { CloseBtn, CheckBtn } from 'components/Buttons/'

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
        {task.name} - <span>{task.tag}</span>
      </Text>

      <CloseBtn
        position="absolute"
        close={() => {
          actions.removeTask(task.id)
        }}
      />
    </Box>
  )
}

export default Task

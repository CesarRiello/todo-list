import React from 'react'
import Task from '../Task'
import TaskFilter from '../TaskFilter'

const View = ({ tasks, tags, actions, filters }) => (
  <div>
    <TaskFilter tags={tags} actions={actions} filters={filters} />

    {tasks.length ? (
      <div>
        {tasks.map(t => (
          <Task key={t.id} task={t} actions={actions} />
        ))}
      </div>
    ) : (
      <p>No tasks left</p>
    )}
  </div>
)

export default View

import React, { Component } from 'react'
import View from './View'
import PropTypes from 'prop-types'
import { deleteTask, updateTask } from 'services/api'

class TaskList extends Component {
  state = {
    begining: '',
    end: '',
    search: '',
    status: 'all',
    tag: '',
    IsOpenFilter: false
  }

  setParentState = this.props.setParentState

  filterTasks = () => {
    const { begining, end, search, status, tag } = this.state
    return this.props.tasks
      .filter(
        t =>
          status === 'all' ||
          (status === 'completed' && t.isCompleted) ||
          (status === 'active' && !t.isCompleted)
      )
      .filter(t => !tag || t.tag === tag)
      .filter(t => (!begining || t.date < begining) && (!end || t.date > end))
      .filter(t => !search || t.name.includes(search))
      .reverse()
  }

  remove = task => {
    deleteTask(
      task,
      () => {
        const tasks = this.props.tasks.filter(t => t.id !== task.id)
        this.setParentState({ tasks })
      },
      console.error
    )
  }

  edit = task => {
    this.setParentState({ task })
    this.props.history.push('/edit')
  }

  update = task => {
    updateTask(
      task,
      () => {
        const tasks = this.props.tasks.map(t => (t.id === task.id ? task : t))
        this.setParentState({ tasks })
      },
      console.error
    )
  }

  setFilter = filter => this.setState(filter)

  render() {
    const actions = {
      remove: this.remove,
      edit: this.edit,
      create: this.create,
      update: this.update,
      setFilter: this.setFilter
    }

    return (
      <View
        tasks={this.filterTasks(this.props.tasks)}
        tags={this.props.tags}
        filters={this.state}
        actions={actions}
      />
    )
  }
}

TaskList.defaultProps = {
  task: {
    name: '',
    tag: '',
    isCompleted: false
  },
  tags: [],
  tasks: []
}

TaskList.propTypes = {
  task: PropTypes.object,
  tags: PropTypes.array,
  tasks: PropTypes.array,
  setParentState: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired
}

export default TaskList

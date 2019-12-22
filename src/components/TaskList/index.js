import React, { Component } from 'react'
import View from './View'
import PropTypes from 'prop-types'

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

  removeTask = id => {
    const tasks = this.props.tasks.filter(t => t.id !== id)
    this.setParentState({ tasks })
  }

  editTask = task => {
    this.setParentState({ task })
    this.props.history.push('/edit')
  }

  updateTask = task => {
    const tasks = this.props.tasks.map(t => (t.id === task.id ? task : t))
    this.setParentState({ tasks })
  }

  setFilter = filter => this.setState(filter)

  render() {
    const actions = {
      removeTask: this.removeTask,
      editTask: this.editTask,
      createTask: this.createTask,
      updateTask: this.updateTask,
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
  history: PropTypes.func.isRequired
}

export default TaskList

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
    IsOpenFilter: false,
    page: 1,
    itemsPerPage: 5,
    totalOfTasks: 0
  }

  static getDerivedStateFromProps(props, state) {
    const totalOfTasks = props.tasks.length
    return { ...state, totalOfTasks }
  }

  calculatePagination = () => {
    const { page, itemsPerPage } = this.state
    const start = itemsPerPage * (page - 1)
    const end = itemsPerPage * page

    return [start, end]
  }

  setParentState = this.props.setParentState

  filterTasks = () => {
    const { begining, end, search, status, tag } = this.state
    const pagination = this.calculatePagination()

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
      .slice(...pagination)
  }

  remove = task => {
    deleteTask(
      task,
      () => {
        const tasks = this.props.tasks.filter(t => t.uuid !== task.uuid)
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
        const tasks = this.props.tasks.map(t => (t.uuid === task.uuid ? task : t))
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
      setFilter: this.setFilter,
      setParentState: this.setParentState
    }

    return (
      <View
        tasks={this.filterTasks(this.props.tasks)}
        tags={this.props.tags}
        filters={this.state}
        actions={actions}
        history={this.props.history}
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

import React, { Component } from 'react'
import View from './View'
import PropTypes from 'prop-types'
import { saveTask, updateTask } from 'services/api'
import { dateIso } from 'components/helpers/mask'

class Taskform extends Component {
  state = {
    errors: {}
  }

  setParentState = this.props.setParentState

  save = () => {
    const { task } = this.props
    if (task.id) {
      this.update(task)
    } else {
      this.create(task)
    }
  }

  create = task => {
    saveTask(
      task,
      () => {
        const tasks = [...this.props.tasks, task]
        const _task = { name: '', isCompleted: false }
        this.setParentState({ tasks, task: _task })
        this.props.history.push('/')
      },
      console.error
    )
  }

  update = task => {
    updateTask(
      task,
      () => {
        const tasks = this.props.tasks.map(t => (t.uuid === task.uuid ? task : t))
        this.setParentState({ tasks })
        this.props.history.push('/')
      },
      console.error
    )
  }

  handleChange = e => {
    const task = { ...this.props.task, [e.target.name]: e.target.value }
    this.setParentState({ task })
  }

  handleChangeDataTime = e => {
    const task = { ...this.props.task, [e.target.name]: dateIso(e.target.value) }
    this.setParentState({ task })
  }

  setError = error => {
    this.setState({ errors: { ...this.state.errors, error } })
  }

  render() {
    const actions = {
      handleChange: this.handleChange,
      handleChangeDataTime: this.handleChangeDataTime,
      save: this.save,
      setError: this.setError
    }

    return <View {...this.props} actions={actions} errors={this.errors} />
  }
}

Taskform.defaultProps = {
  task: {
    name: '',
    tag: '',
    isCompleted: false,
    remind: 0,
    forecast: ''
  },
  tags: [],
  tasks: [],
  errors: {}
}

Taskform.propTypes = {
  setParentState: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  task: PropTypes.object,
  tags: PropTypes.array,
  tasks: PropTypes.array,
  errors: PropTypes.object
}

export default Taskform

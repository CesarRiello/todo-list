import React, { Component } from 'react'
import View from './View'
import PropTypes from 'prop-types'
import { saveTask, updateTask } from 'services/api'
import { dateIso } from 'components/helpers/mask'
import { datetimeErrorMessage, checkIsFuture } from 'components/helpers/datetime'

class Taskform extends Component {
  state = {
    errors: {
      forecast: '',
      name: ''
    }
  }

  setParentState = this.props.setParentState

  save = () => {
    if (this.hasErrors()) return

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

  clearErrors = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    })
  }

  handleChange = e => {
    const task = { ...this.props.task, [e.target.name]: e.target.value }
    this.setParentState({ task })
  }

  handleDatetime = e => {
    const task = { ...this.props.task, [e.target.name]: dateIso(e.target.value) }
    this.setParentState({ task })

    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: datetimeErrorMessage(dateIso(e.target.value))
      }
    })
  }

  checkFields = () => {}

  setError = error => {
    this.setState({ errors: { ...this.state.errors, ...error } })
  }

  hasErrors = () => {
    const { task } = this.props

    if ((task.name || '').length < 3) {
      this.setError({ name: 'Enter a valid task name' })
      return true
    }

    if ((task.forecast || '').length < 10) {
      this.setError({ forecast: 'Enter a valid forecast' })
      return true
    }

    if (!checkIsFuture(task.forecast)) {
      this.setError({ forecast: 'Forecast must be a future date' })
      return true
    }

    return false
  }

  render() {
    const actions = {
      handleChange: this.handleChange,
      handleDatetime: this.handleDatetime,
      clearErrors: this.clearErrors,
      save: this.save,
      setError: this.setError
    }

    return <View {...this.props} actions={actions} errors={this.state.errors} />
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

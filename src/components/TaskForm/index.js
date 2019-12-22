import React, { Component } from 'react'
import View from './View'
import uuidGenerator from 'components/helpers/uuidGenerator'
import PropTypes from 'prop-types'

class Taskform extends Component {
  state = {
    errors: {}
  }

  setParentState = this.props.setParentState

  saveTask = () => {
    const { task } = this.props
    if (task.id) {
      this.updateTask(task)
    } else {
      this.createNewTask(task)
    }
  }

  createNewTask = task => {
    const newTask = { ...task, id: uuidGenerator() }
    const tasks = [...this.props.tasks, newTask]
    this.setParentState({ tasks })
    this.props.history.push('/')
  }

  updateTask = task => {
    const tasks = this.props.tasks.map(t => (t.id === task.id ? task : t))
    this.setParentState({ tasks })
  }

  handleChange = e => {
    const task = { ...this.props.task, [e.target.name]: e.target.value }
    this.setParentState({ task })
  }

  setError = error => {
    this.setState({ errors: { ...this.state.errors, error } })
  }

  render() {
    console.log(this.props)
    const actions = {
      handleChange: this.handleChange,
      saveTask: this.saveTask,
      setError: this.setError
    }

    return <View {...this.props} actions={actions} errors={this.errors} />
  }
}

Taskform.defaultProps = {
  task: {
    name: '',
    tag: '',
    isCompleted: false
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

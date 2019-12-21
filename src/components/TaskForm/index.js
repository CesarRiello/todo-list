import React, { Component } from 'react'
import View from './View'
import uuidGenerator from 'components/helpers/uuidGenerator'

class Taskform extends Component {
  setParentState = this.props.setParentState

  saveTask = () => {
    const { task } = this.props
    task.id ? this.updateTask(task) : this.createNewTask(task)
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

  render() {
    console.log(this.props)
    const actions = {
      handleChange: this.handleChange,
      saveTask: this.saveTask
    }

    return <View {...this.props} actions={actions} />
  }
}

export default Taskform

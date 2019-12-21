import React, { Component } from 'react'
import View from './View'

class TagSForm extends Component {
  state = {
    tag: ''
  }

  setParentState = this.props.setParentState

  removeTag = tag => {
    const tags = this.props.tags.filter(t => t !== tag)

    this.setParentState({ tags })
    this.setState({ tag: '' })
  }

  saveTag = () => {
    if (!this.state.tag || this.props.tags.includes(this.state.tag)) return

    this.setParentState({ tags: [...this.props.tags, this.state.tag] })
    this.setState({ tag: '' })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <View
        {...this.state}
        tags={this.props.tags}
        handleChange={this.handleChange}
        saveTag={this.saveTag}
        removeTag={this.removeTag}
      />
    )
  }
}

export default TagSForm

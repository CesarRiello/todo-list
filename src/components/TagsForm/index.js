import React, { Component } from 'react'
import View from './View'
import PropTypes from 'prop-types'
import uuidGenerator from 'components/helpers/uuidGenerator'
import slugify from 'components/helpers/slugify'
import { saveTag, deleteTag } from 'services/api'

class TagsForm extends Component {
  state = {
    tag: ''
  }

  setParentState = this.props.setParentState

  remove = tag => {
    const tags = this.props.tags.filter(t => t !== tag)

    deleteTag(
      tag,
      () => {
        this.setParentState({ tags })
        this.setState({ tag: '' })
      },
      console.error
    )
  }

  save = () => {
    if (!this.state.tag || this.props.tags.includes(this.state.tag)) return

    const tag = { tag: slugify(this.state.tag), id: uuidGenerator() }

    saveTag(
      tag,
      () => {
        const tags = [...this.props.tags, tag]
        this.setParentState({ tags })
        this.setState({ tag: '' })
      },
      console.error
    )
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
        save={this.save}
        remove={this.remove}
      />
    )
  }
}

TagsForm.defaultProps = {
  tag: '',
  tags: []
}

TagsForm.propTypes = {
  setParentState: PropTypes.func.isRequired,
  tag: PropTypes.string,
  tags: PropTypes.array
}

export default TagsForm

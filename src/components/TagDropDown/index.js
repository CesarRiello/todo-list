import React from 'react'
import { Select } from 'components/Inputs'
import PropTypes from 'prop-types'

const TagDropDown = ({ tag, tags, setTag }) =>
  tags.length && (
    <Select
      name="tags"
      id="tags"
      value={tag}
      handleChange={e => {
        let tag = e.target.value
        setTag({ tag })
      }}
    >
      {[{ id: '0', tag: '' }, ...tags].map(t => (
        <option key={t.id} value={t.tag}>
          {t.tag}
        </option>
      ))}
    </Select>
  )

TagDropDown.defaultProps = {
  tag: '',
  tags: []
}

TagDropDown.propTypes = {
  setTag: PropTypes.func.isRequired,
  tag: PropTypes.string,
  tags: PropTypes.array
}

export default TagDropDown

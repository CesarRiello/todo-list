import React from 'react'
import { TagWrap, TagText } from './Styles'
import { CloseBtn } from 'components/Buttons'
import PropTypes from 'prop-types'

const Tag = ({ tag, remove, position }) => (
  <TagWrap hasRemove={!!remove} position={position}>
    <TagText>{tag}</TagText>
    {!!remove && <CloseBtn close={remove} ariaLabel="Remove Tag" />}
  </TagWrap>
)

Tag.defaultProps = {
  tag: '',
  position: ''
}

Tag.propTypes = {
  remove: PropTypes.func.isRequired,
  tag: PropTypes.string,
  position: PropTypes.string
}

export default Tag

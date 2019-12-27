import React from 'react'
import { TagWrap, TagText } from './Styles'
import { CloseBtn } from 'components/Buttons'
import PropTypes from 'prop-types'

const Tag = ({ tag, remove, position }) =>
  tag && (
    <TagWrap hasRemove={!!remove} position={position}>
      <TagText>{tag}</TagText>
      {!!remove && <CloseBtn close={remove} ariaLabel="Remove Tag" />}
    </TagWrap>
  )

Tag.defaultProps = {
  tag: '',
  position: '',
  remove: undefined
}

Tag.propTypes = {
  remove: PropTypes.func,
  tag: PropTypes.string,
  position: PropTypes.string
}

export default Tag

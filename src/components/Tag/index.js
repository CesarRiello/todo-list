import React, { Fragment } from 'react'
import { TagWrap, TagText } from './Styles'
import { CloseBtn } from 'components/Buttons'

const Tag = ({ tag, remove }) => (
  <Fragment>
    <TagWrap hasRemove={!!remove}>
      <TagText>{tag}</TagText>
      {!!remove && <CloseBtn close={remove} ariaLabel="Remove Tag" />}
    </TagWrap>
  </Fragment>
)

export default Tag

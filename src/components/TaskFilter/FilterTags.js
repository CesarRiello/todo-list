import React from 'react'
import { Row, Column } from 'components/Grid'
import TagDropDown from 'components/TagDropDown'
import { Label } from '../Inputs'
import PropTypes from 'prop-types'

const FilterTags = ({ tag, tags, setTag }) => (
  <Row>
    <Column>
      <Label htmlFor="all" block>
        <i className="fa fa-tag"></i> Tag
      </Label>
      <TagDropDown tag={tag} tags={tags} setTag={setTag} />
    </Column>
  </Row>
)

FilterTags.defaultProps = {
  tags: [],
  tag: ''
}

FilterTags.propTypes = {
  setTag: PropTypes.func.isRequired,
  tags: PropTypes.array,
  tag: PropTypes.string
}

export default FilterTags

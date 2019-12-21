import React, { Fragment } from 'react'
import { Row, Column, Col1, Col6 } from 'components/Grid'

import { CustomSelectWrap, CustomSelect } from '../Inputs/Styles'
import { Select } from '../Inputs'

const FilterTags = ({ tag, tags, setTag }) => (
  <Row>
    <Col1>
      <i className="fa fa-tag"></i>
    </Col1>
    <Col6>
      {tags.length && (
        <Select
          name="tags"
          initialValue={tag}
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

      )}
    </Col6>
  </Row>
)

export default FilterTags

import React from 'react'
import { Row, Col1, Col6 } from 'components/Grid'
import { dateIso } from 'components/helpers/mask'
import { InputText } from '../Inputs'

const FilterTags = ({ begining, end, setDate }) => (
  <Row>
    <Col1>
      <i className="fa fa-tag"></i>
    </Col1>
    <Col6>
      <i className="fa fa-calendar"></i>
      <InputText
        name="begining"
        value={begining}
        onChange={e => {
          let begining = dateIso(e.target.value)
          setDate({ begining })
        }}
      />
      <InputText
        name="end"
        value={end}
        onChange={e => {
          let end = dateIso(e.target.value)
          setDate({ end })
        }}
      />
    </Col6>
  </Row>
)

export default FilterTags

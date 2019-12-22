import React from 'react'
import { Row, Col6 } from 'components/Grid'
import { dateIso } from 'components/helpers/mask'
import { InputText, Label } from '../Inputs'
import PropTypes from 'prop-types'

const FilterTags = ({ begining, end, setDate }) => (
  <Row>
    <Col6>
      <Label htmlFor="begining" block>
        <i className="fa fa-calendar"></i> Begining
      </Label>

      <InputText
        block
        name="begining"
        id="begining"
        value={begining}
        onChange={e => {
          let begining = dateIso(e.target.value)
          setDate({ begining })
        }}
      />
    </Col6>
    <Col6>
      <Label htmlFor="end" block>
        <i className="fa fa-calendar"></i> End
      </Label>

      <InputText
        block
        name="end"
        id="end"
        value={end}
        onChange={e => {
          let end = dateIso(e.target.value)
          setDate({ end })
        }}
      />
    </Col6>
  </Row>
)

FilterTags.defaultProps = {
  begining: '',
  end: ''
}

FilterTags.propTypes = {
  setDate: PropTypes.func.isRequired,
  begining: PropTypes.string,
  end: PropTypes.string
}

export default FilterTags

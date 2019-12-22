import React from 'react'
import { Button } from 'components/Buttons'
import { Row, Column } from 'components/Grid'
import { Label } from 'components/Inputs'
import PropTypes from 'prop-types'

const FilterStatus = ({ status, setStatus }) => (
  <Row>
    <Column>
      <Label htmlFor="all" block>
        <i className="fa fa-check"></i> Status
      </Label>

      {['all', 'completed', 'active'].map(s => (
        <Button
          key={s}
          id={s}
          onClick={() => {
            setStatus({ status: s })
          }}
          active={status === s}
        >
          {s}
        </Button>
      ))}
    </Column>
  </Row>
)

FilterStatus.defaultProps = {
  status: 'all'
}

FilterStatus.propTypes = {
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string
}

export default FilterStatus

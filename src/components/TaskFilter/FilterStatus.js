import React from 'react'
import { Button } from 'components/Buttons'
import { Row, Column, Col1, Col6 } from 'components/Grid'
import { InputText, Label } from 'components/Inputs'

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

export default FilterStatus

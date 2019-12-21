import React from 'react'
import { Check } from './Styles'

const CheckBtn = ({ toggle, checked }) => (
  <Check
    aria-label="check"
    onClick={() => {
      toggle(!checked)
    }}
  >
    <i className={`fa fa-${checked ? 'check-' : ''}square-o`} aria-hidden="true"></i>
  </Check>
)

export default CheckBtn

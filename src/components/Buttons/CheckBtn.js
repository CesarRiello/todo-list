import React, { Fragment } from 'react'
import { Check } from './Styles'
import { Label } from 'components/Inputs/'
import PropTypes from 'prop-types'

const CheckBtn = ({ toggle, checked, label, position }) => (
  <Fragment>
    <Check
      id="isCompleted"
      name="isCompleted"
      position={position}
      aria-label="check"
      onClick={() => {
        toggle(!checked)
      }}
    >
      <i className={`fa fa-${checked ? 'check-' : ''}square-o`} aria-hidden="true"></i>
    </Check>

    {label && <Label htmlFor="isCompleted">{label}</Label>}
  </Fragment>
)

CheckBtn.defaultProps = {
  checked: false,
  label: ''
}

CheckBtn.propTypes = {
  toggle: PropTypes.func.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool
}

export default CheckBtn

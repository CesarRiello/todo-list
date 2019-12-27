import React, { Fragment } from 'react'
import { Check } from './Styles'
import { Label } from 'components/Inputs/'
import PropTypes from 'prop-types'

const CheckBtn = ({ checked, label, position, onClick }) => (
  <Fragment>
    <Check
      type="button"
      id="isCompleted"
      name="isCompleted"
      position={position}
      onClick={onClick}
      aria-label="check"
    >
      <i className={`fa fa-${checked ? 'check-' : ''}square-o`} aria-hidden="true"></i>
    </Check>

    {label && <Label htmlFor="isCompleted">{label}</Label>}
  </Fragment>
)

CheckBtn.defaultProps = {
  checked: false,
  label: '',
  position: ''
}

CheckBtn.propTypes = {
  label: PropTypes.string,
  position: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default CheckBtn

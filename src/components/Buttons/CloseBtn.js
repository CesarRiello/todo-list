import React from 'react'
import { Close } from './Styles'
import PropTypes from 'prop-types'

const CloseBtn = ({ close, ariaLabel, position }) => (
  <Close onClick={close} arial-label={ariaLabel} position={position}>
    <i className="fa fa-times" aria-hidden="true"></i>
  </Close>
)

CloseBtn.defaultProps = {
  ariaLabel: 'Close',
  position: ''
}

CloseBtn.propTypes = {
  close: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  position: PropTypes.string
}

export default CloseBtn

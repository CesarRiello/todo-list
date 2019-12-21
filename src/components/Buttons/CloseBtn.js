import React from 'react'
import { Close } from './Styles'

const CloseBtn = ({ close, ariaLabel, position }) => (
  <Close onClick={close} arial-label={ariaLabel} position={position}>
    <i className="fa fa-times" aria-hidden="true"></i>
  </Close>
)

export default CloseBtn

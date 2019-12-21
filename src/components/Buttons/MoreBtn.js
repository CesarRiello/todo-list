import React from 'react'
import { More } from './Styles'

const MoreBtn = ({ more, ariaLabel = 'More' }) => (
  <More onClick={more} arial-label={ariaLabel}>
    <i className="fa fa-times" aria-hidden="true"></i>
  </More>
)

export default MoreBtn

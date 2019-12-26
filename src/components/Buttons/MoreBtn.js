import React from 'react'
import { More } from './Styles'
import PropTypes from 'prop-types'

const MoreBtn = ({ more, ariaLabel }) => (
  <More onClick={more} arial-label={ariaLabel}>
    <i className="fa fa-plus-circle" aria-hidden="true"></i>
  </More>
)

MoreBtn.defaultProps = {
  ariaLabel: 'More'
}

MoreBtn.propTypes = {
  more: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string
}

export default MoreBtn

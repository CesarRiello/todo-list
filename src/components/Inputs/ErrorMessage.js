import React from 'react'
import { Label } from './Styles'
import PropTypes from 'prop-types'

const ErrorMessage = ({ error, htmlFor }) =>
  error && (
    <Label block error htmlFor={htmlFor}>
      <i className="fa fa-exclamation-triangle"></i>
      <span>{error}</span>
    </Label>
  )

ErrorMessage.defaultProps = {
  error: ''
}

ErrorMessage.propTypes = {
  error: PropTypes.string
}

export default ErrorMessage

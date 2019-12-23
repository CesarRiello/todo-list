import React from 'react'
import { ErrorLabel } from './Styles'
import PropTypes from 'prop-types'

const ErrorMessage = ({ error }) => error && <ErrorLabel>{error}</ErrorLabel>

ErrorMessage.defaultProps = {
  error: ''
}

ErrorMessage.propTypes = {
  error: PropTypes.string
}

export default ErrorMessage

import React from 'react'
import { ErrorLabel } from './Styles'
import PropTypes from 'prop-types'

const ErrorMessage = ({ error }) => error && <ErrorLabel>{error}</ErrorLabel>

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired
}

export default ErrorMessage

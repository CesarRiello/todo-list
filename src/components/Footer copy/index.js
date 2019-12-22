import React from 'react'
import { Button } from '../TaskListControls/node_modules/components/Buttons/styles'
import PropTypes from 'prop-types'

const Footer = ({ history }) => (
  <div>
    <span> before </span>
    <Button
      onClick={() => {
        history.push('/edit')
      }}
    ></Button>
    <span> next </span>
  </div>
)

Footer.propTypes = {
  history: PropTypes.func.isRequired
}

export default Footer

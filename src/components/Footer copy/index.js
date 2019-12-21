import React from 'react'
import { Button } from '../TaskListControls/node_modules/components/Buttons/styles'

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

export default Footer

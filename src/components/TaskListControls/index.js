import React from 'react'
import { Button } from 'components/Buttons'

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

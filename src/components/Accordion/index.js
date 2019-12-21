import React, { Fragment, useState } from 'react'
import Subtitle from 'components/Subtitle'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Fragment>
      <Subtitle
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {title} <i className={`fa fa-angle-${isOpen ? 'up' : 'down'}`}></i>
      </Subtitle>
      {isOpen && <Fragment>{children}</Fragment>}
    </Fragment>
  )
}
export default Accordion

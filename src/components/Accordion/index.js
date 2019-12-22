import React, { Fragment, useState } from 'react'
import Subtitle from 'components/Subtitle'
import PropTypes from 'prop-types'

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

Accordion.defaultProps = {
  title: ''
}

Accordion.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default Accordion

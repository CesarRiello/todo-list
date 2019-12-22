import React from 'react'
import { Blind, Box, Title, Container } from './Styles'
import { CloseBtn } from 'components/Buttons/'
import PropTypes from 'prop-types'

const Modal = ({ title, closeModal, children }) => (
  <Blind>
    <Box>
      <Title>{title}</Title>
      <CloseBtn
        close={() => {
          closeModal()
        }}
      />
      <Container>{children}</Container>
    </Box>
  </Blind>
)

Modal.defaultProps = {
  title: ''
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default Modal

import React from 'react'
import { Blind, Box, Title, Container } from './Styles'
import { CloseBtn } from 'components/Buttons/'

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

export default Modal

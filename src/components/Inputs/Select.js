import React from 'react'
import { CustomSelect, CustomSelectWrap } from './Styles'

const Select = ({ name, initialValue, handleChange, children }) => (
  <CustomSelectWrap>
    <CustomSelect name={name} value={initialValue} onChange={handleChange}>
      {children}
    </CustomSelect>
  </CustomSelectWrap>
)
export default Select

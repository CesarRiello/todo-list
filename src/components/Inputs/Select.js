import React from 'react'
import { CustomSelect, CustomSelectWrap } from './Styles'
import PropTypes from 'prop-types'

const Select = ({ name, value, handleChange, children, block }) => (
  <CustomSelectWrap block>
    <CustomSelect name={name} value={value} onChange={handleChange} block={block}>
      {children}
    </CustomSelect>
  </CustomSelectWrap>
)

Select.defaultProps = {
  name: '',
  value: '',
  block: false,
  children: []
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  block: PropTypes.bool
}

export default Select

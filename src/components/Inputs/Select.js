import React from 'react'
import { CustomSelect, CustomSelectWrap } from './Styles'
import PropTypes from 'prop-types'

const Select = ({ name, initialValue, handleChange, children, block }) => (
  <CustomSelectWrap block>
    <CustomSelect name={name} value={initialValue} onChange={handleChange} block={block}>
      {children}
    </CustomSelect>
  </CustomSelectWrap>
)

Select.defaultProps = {
  name: '',
  initialValue: '',
  block: false
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  name: PropTypes.string,
  initialValue: PropTypes.string,
  block: PropTypes.bool
}

export default Select

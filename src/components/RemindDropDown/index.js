import React from 'react'
import { Select } from 'components/Inputs'
import PropTypes from 'prop-types'

const timeInTimeStamp = {
  s: 1000,
  get m() {
    return this.s * 60
  },
  get h() {
    return this.m * 60
  },
  get d() {
    return this.h * 24
  },
  get w() {
    return this.d * 7
  }
}

const remindRange = [
  { label: 'None', time: String(0) },
  { label: 'Five minutes', time: String(timeInTimeStamp.m * 5) },
  { label: 'One hour', time: String(timeInTimeStamp.h * 2) },
  { label: 'A day before', time: String(timeInTimeStamp.d) },
  { label: 'A week before', time: String(timeInTimeStamp.w) }
]

const RemindDropDown = ({ handleChange, value }) => (
  <Select name="remind" id="remind" handleChange={handleChange} value={value}>
    {remindRange.map(t => (
      <option key={t.time} value={t.time}>
        {t.label}
      </option>
    ))}
  </Select>
)

RemindDropDown.defaultProps = {
  value: ''
}

RemindDropDown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default RemindDropDown

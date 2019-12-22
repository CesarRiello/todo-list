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
  { label: '', time: 0 },
  { label: 'Five minutes', time: timeInTimeStamp.m * 5 },
  { label: 'One hour', time: timeInTimeStamp.h * 2 },
  { label: 'A day before', time: timeInTimeStamp.d },
  { label: 'A week before', time: timeInTimeStamp.w }
]

const RemindDropDown = ({ setParentState, value }) => (
  <Select name="remind" id="remind" handleChange={setParentState} value={value}>
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
  setParentState: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default RemindDropDown

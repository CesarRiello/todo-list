import React, { Fragment } from 'react'
import { CustomSelectWrap, CustomSelect } from '../Inputs/Styles'
import Box from 'components/Box'
import Subtitle from 'components/Subtitle'
import { InputText, Label } from 'components/Inputs'
import { Row, Column, Col1, Col6 } from 'components/Grid'
import FilterStatus from './FilterStatus'

const FilterSearch = ({ search, setSearch }) => (
  <Row>
    <Col1>
      <i className="fa fa-search"></i>
    </Col1>
    <Col6>
      <InputText
        name="search"
        value={search}
        onChange={e => {
          let search = e.target.value
          setSearch({ search })
        }}
      />
    </Col6>
  </Row>
)

export default FilterSearch

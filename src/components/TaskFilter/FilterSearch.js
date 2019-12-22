import React from 'react'
import { InputText, Label } from 'components/Inputs'
import { Row, Column } from 'components/Grid'
import PropTypes from 'prop-types'

const FilterSearch = ({ search, setSearch }) => (
  <Row>
    <Column>
      <Label htmlFor="search" block>
        <i className="fa fa-search"></i> Task text
      </Label>

      <InputText
        block
        name="search"
        id="search"
        value={search}
        onChange={e => {
          let search = e.target.value
          setSearch({ search })
        }}
      />
    </Column>
  </Row>
)

FilterSearch.defaultProps = {
  search: ''
}

FilterSearch.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string
}

export default FilterSearch

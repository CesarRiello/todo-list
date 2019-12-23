import React from 'react'
import Box from 'components/Box'
import { Row, Col6, Column } from 'components/Grid'
import Accordion from 'components/Accordion'
import FilterStatus from './FilterStatus'
import FilterSearch from './FilterSearch'
import FilterTags from './FilterTags'
import FilterDate from './FilterDate'
import PropTypes from 'prop-types'

const TaskFilter = ({ tags, filters, actions }) => (
  <Box>
    <Accordion title="Filtros">
      <Row>
        <Col6>
          <FilterStatus setStatus={actions.setFilter} status={filters.status} />
        </Col6>
        <Col6>
          <FilterTags setTag={actions.setFilter} tag={filters.tag} tags={tags} />
        </Col6>
      </Row>

      <Row>
        <Column>
          <FilterSearch setSearch={actions.setFilter} search={filters.search} />
        </Column>
      </Row>
{/*
      <Row>
        <Column>
          <FilterDate setDate={actions.setFilter} begining={filters.begining} end={filters.end} />
        </Column>
      </Row> */}
    </Accordion>
  </Box>
)

TaskFilter.defaultProps = {
  tags: []
}

TaskFilter.propTypes = {
  actions: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  tags: PropTypes.array
}

export default TaskFilter

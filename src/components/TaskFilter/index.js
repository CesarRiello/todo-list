import React from 'react'
import Box from 'components/Box'
import { Row, Col6, Column } from 'components/Grid'
import Accordion from 'components/Accordion'
import FilterStatus from './FilterStatus'
import FilterSearch from './FilterSearch'
import FilterTags from './FilterTags'
import FilterDate from './FilterDate'

const TaskFilter = ({ tags, filters, actions }) => (
  <Box>
    <Accordion title="Filtros">
      <Row>
        <Column>
          <FilterStatus setStatus={actions.setFilter} status={filters.status} />
        </Column>
        <Column>
          <FilterTags setTag={actions.setFilter} tag={filters.tag} tags={tags} />
        </Column>
      </Row>

      <Row>
        <Column>
          <FilterSearch setSearch={actions.setFilter} search={filters.search} />
        </Column>
        <Col6>
          <FilterDate setDate={actions.setFilter} begining={filters.begining} end={filters.end} />
        </Col6>
      </Row>
    </Accordion>
  </Box>
)

export default TaskFilter

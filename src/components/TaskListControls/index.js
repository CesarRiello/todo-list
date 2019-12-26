import React from 'react'
import { Button, MoreBtn } from 'components/Buttons'
import { ActionsBar } from './Styles'
import PropTypes from 'prop-types'

const TaskListControls = ({ history, filters, actions }) => (
  <ActionsBar>
    <Button
      disable={filters.page < 2}
      onClick={() => {
        const page = filters.page - 1
        actions.setFilter({ page })
      }}
    >
      <i className="fa fa-chevron-left"></i> before{' '}
    </Button>

    <MoreBtn
      more={() => {
        history.push('/edit')
      }}
    >
      <i className="fa fa-plus-circle"></i>
    </MoreBtn>

    <Button
      disable={filters.page > filters.totalOfTasks / filters.itemsPerPage}
      onClick={() => {
        const page = filters.page + 1
        actions.setFilter({ page })
      }}
    >
      next <i className="fa fa-chevron-right"></i>
    </Button>
  </ActionsBar>
)

TaskListControls.propTypes = {
  actions: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default TaskListControls

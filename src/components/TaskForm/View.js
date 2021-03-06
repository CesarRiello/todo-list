import React from 'react'
import PropTypes from 'prop-types'

import { Primary, CheckBtn } from 'components/Buttons'
import { Label, InputText, ErrorMessage } from 'components/Inputs/'
import TagDropDown from 'components/TagDropDown/'
import RemindDropDown from 'components/RemindDropDown/'
import Box from 'components/Box/'
import { Row, Column } from 'components/Grid/'

const View = ({ actions, task, tags, errors }) => {
  return (
    <Box>
      <form
        onSubmit={e => {
          e.preventDefault()
          actions.save()
        }}
      >
        <Row>
          <Column>
            <Label block>
              <i className="fa fa-tasks"></i> Task
            </Label>
            <InputText
              block
              id="name"
              name="name"
              value={task.name}
              onChange={actions.handleChange}
              onFocus={actions.clearErrors}
              error={!!errors.name}
            />
            <ErrorMessage htmlFor="name" error={errors.name} />

          </Column>
        </Row>

        <Row>
          <Column>
            <Label block>
              <i className="fa fa-tag"></i> Tag
            </Label>
            <TagDropDown
              id=""
              tag={task.tag}
              tags={tags}
              setTag={e => {
                actions.handleChange({
                  target: {
                    name: 'tag',
                    value: e.tag
                  }
                })
              }}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <Label block htmlFor="forecast">
              <i className="fa fa-calendar-o"></i> Forecast
            </Label>
            <InputText
              error={!!errors.forecast}
              block
              id="forecast"
              name="forecast"
              // placeholder="YYYY-MM-DD hh:mm:ss"
              value={task.forecast}
              onChange={actions.handleDatetime}
              type="tel"
            />
            <ErrorMessage htmlFor="forecast" error={errors.forecast} />
          </Column>
        </Row>

        <Row>
          <Column>
            <Label block>
              <i className="fa fa-clock-o"></i> Reminder
            </Label>
            <RemindDropDown value={task.remind} handleChange={actions.handleChange} />
          </Column>
        </Row>

        {task.id && (
          <Row>
            <Column>
              <Label block>
                <i className="fa fa-check"></i> Status
              </Label>

              <CheckBtn
                label={task.isCompleted ? 'completed' : 'active'}
                checked={task.isCompleted}
                onClick={() => {
                  actions.handleChange({
                    target: {
                      name: 'isCompleted',
                      value: !task.isCompleted
                    }
                  })
                }}
              />
            </Column>
          </Row>
        )}

        <Primary type="submit"> SAVE </Primary>
      </form>
    </Box>
  )
}

View.defaultProps = {
  task: {
    name: '',
    tag: '',
    isCompleted: false,
    remind: ''
  },
  tags: [],
  errors: { forecast: '' }
}

View.propTypes = {
  actions: PropTypes.object.isRequired,
  task: PropTypes.object,
  tags: PropTypes.array,
  errors: PropTypes.object
}

export default View

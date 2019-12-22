import React from 'react'
import { Primary, CheckBtn } from 'components/Buttons'
import { Label, ErrorMessage, InputText } from 'components/Inputs/'
import TagDropDown from 'components/TagDropDown/'
import RemindDropDown from 'components/RemindDropDown/'
import Box from 'components/Box/'
import { Row, Column } from 'components/Grid/'
import { dateIso } from 'components/helpers/mask'
import PropTypes from 'prop-types'

const View = ({ actions, task, tags, errors }) => (
  <Box>
    <form
      onSubmit={e => {
        e.preventDefault()
        actions.saveTask()
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
          />
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

        <Column>
          <Label block>
            <i className="fa fa-calendar"></i> Forecast
          </Label>
          <InputText
            id="forecast"
            name="forecast"
            isInvalid={!!(errors.forecast || '')}
            value={task.forecast}
            onChange={e => {
              actions.handleChange({
                target: {
                  name: 'forecast',
                  value: dateIso(e.target.value)
                }
              })
            }}
          />
          <ErrorMessage error={errors.forecast || ''} />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label block>
            <i className="fa fa-alarm"></i> Reminder
          </Label>
          <RemindDropDown value={task.remind} onChange={actions.handleChange} />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label block>
            <i className="fa fa-check"></i> Status
          </Label>

          <CheckBtn
            label={task.isCompleted ? 'completed' : 'active'}
            checked={task.isCompleted}
            onChange={actions.handleChange}
          />
        </Column>
      </Row>

      <hr />

      <Primary type="submit"> SAVE </Primary>
    </form>
  </Box>
)

View.defaultProps = {
  task: {
    name: '',
    tag: '',
    isCompleted: false
  },
  tags: [],
  errors: {}
}

View.propTypes = {
  actions: PropTypes.object.isRequired,
  task: PropTypes.object,
  tags: PropTypes.array,
  errors: PropTypes.object
}

export default View

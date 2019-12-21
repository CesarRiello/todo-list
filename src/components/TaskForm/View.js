import React from 'react'
import { CheckBtn, Primary } from 'components/Buttons'
import { InputText } from 'components/Inputs/'
import { CustomSelectWrap, CustomSelect, Label } from '../Inputs/Styles'
import { Box } from './Styles'


const View = ({ actions, task, tags }) => (
  <Box>
    <form
      onSubmit={e => {
        e.preventDefault()
        actions.saveTask()
      }}
    >
      <InputText name="name" value={task.name} onChange={actions.handleChange} />

      <hr />
      <Label>
        {' '}
        Tag
        <CustomSelectWrap>
          <CustomSelect name="tag" value={task.tag} onChange={actions.handleChange}>
            <option value=""></option>
            {(tags || []).map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </CustomSelect>
        </CustomSelectWrap>
      </Label>
      <hr />

      <Primary type="submit"> SAVE </Primary>
    </form>
  </Box>
)

export default View

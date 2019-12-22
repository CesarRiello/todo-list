import React from 'react'
import { Primary } from 'components/Buttons'
import { InputText } from 'components/Inputs'
import Box from 'components/Box'
import Tag from 'components/Tag'
import { Row, Column, Col3 } from 'components/Grid'
import PropTypes from 'prop-types'

const View = ({ tag, tags, handleChange, saveTag, removeTag }) => (
  <Box>
    <form
      onSubmit={e => {
        e.preventDefault()
        saveTag()
      }}
    >
      <Row>
        <Column>
          <InputText block name="tag" value={tag} onChange={handleChange} />
        </Column>
        <Col3>
          <Primary block type="submit">
            {' '}
            SAVE{' '}
          </Primary>
        </Col3>
      </Row>
    </form>

    {(tags || []).sort().map(t => (
      <Tag key={t.id} tag={t.tag} remove={() => removeTag(t)} />
    ))}
  </Box>
)

View.defaultProps = {
  tag: '',
  tags: []
}

View.propTypes = {
  handleChange: PropTypes.func.isRequired,
  saveTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  tag: PropTypes.string,
  tags: PropTypes.array
}

export default View

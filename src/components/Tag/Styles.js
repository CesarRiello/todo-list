import styled from 'styled-components'
import style from 'components/helpers/style'

export const TagWrap = styled.div`
  display: ${({ hasRemove }) => (hasRemove ? 'block' : 'inline-block')};
  position: relative;
  margin: 5px;
`

export const TagText = styled.span`
  padding: 2px 5px;
  font-size: ${style.sizes.sm};
  color: ${style.color.grayDark};
  font-weight: 400;
  border: 1px solid ${style.color.grayStrong};
  width: max-content;
  border-radius: 10px;
`

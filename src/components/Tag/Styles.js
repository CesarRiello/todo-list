import styled from 'styled-components'
import style from 'components/helpers/style'

export const TagWrap = styled.div`
  display: ${({ hasRemove }) => (hasRemove ? 'block' : 'inline-block')};
  position: ${({ position }) => position || 'relative'};
  margin: 5px;
  right: 2px;
  bottom: 5px;
`

export const TagText = styled.span`
  padding: 1px 6px;
  font-size: ${style.sizes.sm};
  color: ${style.color.grayDark};
  font-weight: 400;
  border: 1px solid ${style.color.grayStrong};
  width: max-content;
  border-radius: 10px;
`

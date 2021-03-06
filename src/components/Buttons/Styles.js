import styled from 'styled-components'
import style from 'components/helpers/style'
import pxRem from 'components/helpers/pxRem'

export const Button = styled.button`
  border: none;
  background: none;
  color: ${style.color.textColor};
  padding: 4px 5px;
  border-radius: 3px;
  font-size: ${pxRem(15)};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${({ active }) => active && 'border: 1px solid black;'}

  ${({ disable }) =>
    disable &&
    `
    opacity: .2;
    pointer-events: none;


    &:hover {
      opacity: .2;
    }

  `}

  ${({ block }) =>
    block
      ? `
      display: block;
      width: 100%;`
      : `
      display: inline-block;
      `}
`

export const Close = styled(Button)`
  position: ${({ position }) => position || 'static'};
  right: 5px;
  top: 5px;
  padding: 0;
  margin: 2px;
`

export const Check = styled(Button)`
  position: ${({ position }) => position || 'static'};
  font-size: ${pxRem(22)};
`

export const More = styled(Button)`
  position: ${({ position }) => position || 'static'};
  font-size: ${pxRem(22)};
`

export const Primary = styled(Button)`
  background: ${style.color.textColor};
  border: 1px solid black;
  color: ${style.color.white};
  padding: 5px 10px;
  font-weight: 500px;
  font-size: ${pxRem(15)};
  border-radius: 3px;
`

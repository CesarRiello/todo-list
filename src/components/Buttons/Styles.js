import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background: none;
  color: black;
  padding: 4px 5px;
  border-radius: 3px;
  font-size: 14px;
  margin-top: 5px;

  &:hover {
    opacity: 0.6;
  }

  ${({ active }) => active && 'border: 1px solid black;'}

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
  margin: 0;
`

export const Check = styled(Button)`
  position: ${({ position }) => position || 'static'};
  left: 5px;
  top: 10px;
  font-size: 22px;
`

export const Primary = styled(Button)`
  background: #212121;
  border: 1px solid black;
  color: white;
  padding: 5px 10px;
  font-weight: 500px;
  font-size: 14px;
  border-radius: 3px;
`

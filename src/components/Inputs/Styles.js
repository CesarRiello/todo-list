import styled from 'styled-components'

export const Label = styled.label`
  color: gray;
  font-size: 14px;
  ${({ block }) => (block ? `display: block;` : `display: inline-block;`)}
`

export const Text = styled.input`
  border: 1px solid black;
  color: black;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  flex-grow: 1;

  ${({ block }) =>
    block
      ? `
      display: block;
      width: 100%;`
      : `
      display: inline-block;
      `}
`

export const CustomSelectWrap = styled.label`
  border: 1px solid black;
  margin: 5px;
  border-radius: 4px;
  position: relative;
  &::after {
    font-family: FontAwesome;
    color: black;
    font-weight: 900;
    content: '\f078';
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 10;
    font-size: 12px;
    pointer-events: none;
  }
`
export const CustomSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  color: black;
  padding: 4px;
  background: transparent;
  font-size: 14px;
`

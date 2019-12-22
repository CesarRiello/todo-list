import styled from 'styled-components'

export const Label = styled.label`
  color: gray;
  font-size: 14px;
  ${({ block }) => (block ? `display: block;` : `display: inline-block;`)}
`

export const ErrorLabel = styled.label`
  color: red;
  font-size: 12px;
  display: block;
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
  border-radius: 4px;
  position: relative;
  &::after {
    font-family: FontAwesome;
    color: black;
    font-weight: 900;
    content: '\f078';
    position: absolute;
    right: 7px;
    top: 7px;
    z-index: 10;
    font-size: 12px;
    pointer-events: none;
    ${({ block }) =>
      block
        ? `
      display: block;
      width: 100%;`
        : `
      display: inline-block;
      `}
  }
`
export const CustomSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  color: black;
  padding: 5px 30px 5px 10px;
  background: transparent;
  font-size: 14px;
  ${({ block }) =>
    block
      ? `
      display: block;
      width: 100%;`
      : `
      display: inline-block;
      `}
`

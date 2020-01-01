import styled from 'styled-components'
import pxRem from 'components/helpers/pxRem'

export const Label = styled.label`
  font-size: ${pxRem(14)};
  ${({ block }) => (block ? `display: block;` : `display: inline-block;`)}
  ${({ error }) => (error ? `color: red;` : `color: gray;`)}
`

export const Text = styled.input`
  ${({ error }) => (error ? `border: 1px solid red;` : `border: 1px solid black;`)}
  color: black;
  padding: 5px;
  border-radius: 4px;
  font-size: ${pxRem(14)};
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
    font-size: ${pxRem(12)};
    pointer-events: none;
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
  font-size: ${pxRem(14)};
  ${({ block }) =>
    block
      ? `
      display: block;
      width: 100%;`
      : `
      display: inline-block;
      `}
`

import styled from 'styled-components'

const Navigation = styled.nav`
  background: #000000;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: pxRem(15);
  a {
    display: inline-block;
    padding: 5px;
    &.selected,
    &:hover {
      text-decoration: underline;
    }
  }
`

export default Navigation

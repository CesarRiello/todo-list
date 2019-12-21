import styled from 'styled-components'

export const Blind = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
`

export const Box = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  background: white;
  color: #808080;
  margin: 0 20px;
  border-radius: 4px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0 0 10px;
`

export const Container = styled.div`
  position: relative;
  padding: 10px 35px 5px 35px;
`

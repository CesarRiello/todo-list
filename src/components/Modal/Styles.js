import styled from 'styled-components'
import style from 'components/helpers/style'

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
  box-shadow: ${style.shadow};
  position: relative;
  background: ${style.color.white};
  color: ${style.color.grayStrong};
  margin: 0 20px;
  border-radius: 4px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: pxRem(18);
  margin: 10px 0 0 10px;
`

export const Container = styled.div`
  position: relative;
  padding: 10px 35px 5px 35px;
`

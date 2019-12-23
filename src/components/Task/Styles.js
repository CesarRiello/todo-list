import styled from 'styled-components'
import style from 'components/helpers/style'
import pxRem from 'components/helpers/pxRem'

export const Box = styled.div`
  box-shadow: ${style.shadow};
  background: ${style.color.white};
  padding: 5px;
  color: ${style.color.grayStrong};
  position: relative;
  margin: 10px 0;
  border-radius: 4px;
  min-height: 60px;
  display: flex;
  flex-direction: row;
`

export const TaskName = styled.p`
  text-align: left;
  font-size: ${pxRem(15)};
`

export const TaskDate = styled.p`
  text-align: left;
  font-size: ${pxRem(13)};
`

export const NoTask = styled.div`
  margin: 50px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  font-size: ${pxRem(28)};
  text-align: center;
  justify-content: space-evenly;
`

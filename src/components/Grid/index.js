import styled from 'styled-components'
import style from 'components/helpers/style'
import media from 'components/helpers/media'

export const Container = styled.div`
  margin: 0 auto;
  background-color: #eaeaea;
  max-width: ${style.screen.md};
  min-width: ${style.screen.xxs};

  ${media.mobile`
    overflow: auto;
  `}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Column = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;

  padding: 5px;

  ${media.mobile`
    min-width: 100%;
    width: 100%;
    margin: 10px 0;
  `}
`

export const Col1 = styled(Column)`
  max-width: calc(100% / 12);
`
export const Col2 = styled(Column)`
  max-width: calc(100% / 12 * 2);
`
export const Col3 = styled(Column)`
  max-width: calc(100% / 12 * 3);
`
export const Col4 = styled(Column)`
  max-width: calc(100% / 12 * 4);
`
export const Col5 = styled(Column)`
  max-width: calc(100% / 12 * 5);
`
export const Col6 = styled(Column)`
  max-width: calc(100% / 2);
`
export default {
  Col6,
  Col5,
  Col4,
  Col3,
  Col2,
  Col1,
  Column,
  Row,
  Container
}

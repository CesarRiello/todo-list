import styled from 'styled-components'
import media from 'components/helpers/media'

const Main = styled.div`
  margin: 10px;
  ${media.desktop`
    max-width: 400px;
    border-radius: 6px;
    margin: 20px auto;
  `}
`

export default Main

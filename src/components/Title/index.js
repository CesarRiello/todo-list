import styled from 'styled-components'
import style from 'components/helpers/style'
import media from 'components/helpers/media'

const Title = styled.h2`
  padding: 0 0 10px 10px;
  font-size: ${style.sizes.lg};
  color: ${style.color.textColor};
  font-weight: 500;
  ${media.desktop`
    text-align: center;
  `}
`

export default Title

import styled from 'styled-components'
import style from 'components/helpers/style'
import media from 'components/helpers/media'

const Box = styled.div`
  background: ${style.color.white};
  padding: 10px;
  font-size: ${style.sizes.sm};
  color: ${style.color.textColor};
  box-shadow: ${style.shadow};

  ${media.desktop`
    border-radius: 6px;
  `}
`

export default Box

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
    /* max-width: 400px; */
    border-radius: 6px;
    /* margin: 10px auto; */
  `}
`

export default Box

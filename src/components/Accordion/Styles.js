import styled from 'styled-components'
import style from 'components/helpers/style'
import media from 'components/helpers/media'

export const Forehead = styled.div`
  padding: 20px;
  font-size: ${style.sizes.xlg};
  color: ${style.color.textColor};
  font-weight: 600;
  ${media.desktop`
    text-align: center;
  `}
`

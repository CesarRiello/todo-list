import { css } from 'styled-components'
import style from './style'

const media = {
  mobile: (...args) => css`
    @media (max-width: ${style.screen.sm}) {
      ${css(...args)};
    }
  `,

  desktop: (...args) => css`
    @media (min-width: ${style.screen.desktop}) {
      ${css(...args)};
    }
  `
}

export default media

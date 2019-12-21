import { createGlobalStyle } from 'styled-components'
import style from './style'
import pxRem from './pxRem'
import media from './media'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${style.font.sansSerif};
    height: 100%;
    background-color: ${style.color.white};
    color: ${style.color.textColor};
    background-color: ${style.color.background};
  }

  body {
    font-size: ${pxRem(14)};
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    word-wrap: break-word;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  img[src] {
    max-width: 100%;
    height: auto;
  }

  input[type=checkbox] {
    margin: 1px;
  }

  label {
    font-size: ${pxRem(12)};
    cursor: pointer;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
  }

  label small {
    font-size: inherit;
    color: ${style.color.gray};
  }

  label {
    cursor: pointer;
  }

  main {
    min-height: 500px;
  }

  ${media.desktop`
    main {
      min-height: 600px;
    }
  `};

  *,
  *:before,
  *:after{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  h1 {
    margin: 10px 0;
  }

  ul {
    list-style: none;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img[src] {
    max-width: 100%;
    height: auto;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }

  button:focus,
  input:focus {
    outline:none;
  }

  input[type=email] {
    text-transform: lowercase;
  }

  input[type=search] {
    -webkit-appearance: none;
  }

`

export default GlobalStyles

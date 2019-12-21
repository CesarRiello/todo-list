import pxRem from 'components/helpers/pxRem'

const style = {
  font: {
    sansSerif: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    serif: 'Georgia'
  },
  shadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  color: {
    primary: '#00B8D7',
    secondary: '#f8a500',
    white: '#FFF',
    black: '#000',
    dark: '#212121',
    background: '#E5E5E5',
    lightBackground: '#F9F9F9',
    silver: '#ECECEC',
    grayLighter: '#d8d8d8',
    grayLight: '#CCC',
    gray: '#999',
    grayDark: '#777',
    grayStrong: '#666',
    grayStrongest: '#4a4a4a',
    textColor: '#212121'
  },
  screen: {
    xxs: '320px',
    xs: '520px',
    sm: '768px',
    desktop: '769px',
    mm: '849px',
    md: '992px',
    lg: '1220px',
    xlg: '1400px',
    xxlg: '1900px'
  },
  sizes: {
    xxs: pxRem(10),
    xs: pxRem(12),
    sm: pxRem(14),
    md: pxRem(18),
    lg: pxRem(24),
    xlg: pxRem(32)
  }
}

export default style

import theme from 'styled-theming'

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: 'gray', dark: 'darkgray' },
  primary: { light: '#ff9100', dark: '#b26500' },
  secondary: { light: '#4caf50', dark: '#357a38' },
  warning: { light: '#ffea00', dark: '#b2a300' },
})

export default backgroundColor

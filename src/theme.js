import theme from 'styled-theming'

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: 'gray', dark: 'darkslategray' },
  primary: { light: '#fbf5ee', dark: '#afaba6' },
  secondary: { light: '#cb3540', dark: '#8e252c' },
  warning: { light: '#ffea00', dark: '#b2a300' },
})

export default backgroundColor

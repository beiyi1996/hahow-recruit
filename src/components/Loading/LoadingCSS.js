import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop'

const StyledBackdrop = styled(Backdrop)`
  z-index: 1;
  color: #fff;
  position: ${(props) => (props.position ? 'absolute' : 'fixed')};
`

export { StyledBackdrop }

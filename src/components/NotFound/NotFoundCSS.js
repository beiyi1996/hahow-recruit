import styled from 'styled-components'
import backgroundColor from '../../theme'

const StyledNotFoundDiv = styled.div`
  position: absolute;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledSVG = styled.img`
  width: 50%;
  margin: 0 auto;
`

const StyledH2 = styled.h2`
  font-size: 28px;
  color: ${backgroundColor};
`

export { StyledNotFoundDiv, StyledSVG, StyledH2 }

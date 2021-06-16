import styled from 'styled-components'

const StyledDiv = styled.div`
  width: auto;
  position: fixed;
  top: 30px;
  right: 30px;
  & > * + * {
    margin-top: 16px;
  }
`

export { StyledDiv }

import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import backgroundColor from '../../theme'

const StyledGrid = styled(Grid)`
  width: 100%;
  div& {
    margin: 20px auto;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    background-image: linear-gradient(0deg, #101010 0%, #da8a22a6 100%);
  }
  @media screen and (min-width: 680px) {
    div& {
      flex-direction: row;
    }
  }
`

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  &:last-child {
    margin-top: 12px;
    justify-content: flex-end;
  }

  @media screen and (min-width: 680px) {
    width: 50%;

    &:last-child {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
`

const StyledAbilityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  & > * {
    margin: 0 5px;
  }

  @media screen and (min-width: 500px) {
    width: 100%;
  }

  @media screen and (min-width: 980px) {
    width: 55%;
  }
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 35px;
  color: ${backgroundColor};
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 3px;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (min-width: 980px) {
    &:first-child {
      margin-left: 5px;
    }
  }
`

const StyledIconButton = styled.button`
  color: #fbf5ee;
  border-radius: 50%;
  background-color: ${backgroundColor};
  height: 48px;
  width: 48px;
  border: 1px solid ${backgroundColor};
  transition: all 250ms linear;

  &:not(:disabled) {
    box-shadow: 1px 1px 2px #000;
  }

  &:disabled {
    background-color: transparent;
    border: 1px solid darkgray;
    color: darkgray;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: ${backgroundColor};
    border-color: #8e252c;
    box-shadow: unset;
  }
`

const StyledRestPoint = styled.p`
  color: ${backgroundColor};
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 24px;
`

const StyledButton = styled.button`
  font-family: 'MarvelFont';
  background-color: ${backgroundColor};
  box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  width: 50%;
  font-weight: 900;
  font-size: 20px;
  box-shadow: 1px 1px 2px #fbf5ee;
  letter-spacing: 3px;
  transition: all 250ms linear;

  &:hover {
    cursor: pointer;
    box-shadow: unset;
  }
`

const StyledIcon = styled.div`
  color: ${backgroundColor};
`

export {
  StyledGrid,
  StyledBox,
  StyledAbilityDiv,
  StyledIcon,
  StyledSpan,
  StyledIconButton,
  StyledRestPoint,
  StyledButton,
}

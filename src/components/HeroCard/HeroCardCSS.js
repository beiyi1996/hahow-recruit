import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import backgroundColor from '../../theme'

const StyledGrid = styled(Grid)`
  width: calc(100% / 2 - 20px);
  margin: 10px;
  border: none;
  border-radius: 8px;
  background-image: ${(props) =>
    props.variant === 'primary'
      ? 'linear-gradient( 0deg,#2f2f2f 0%,#0000008c 100%)'
      : 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'};
  box-shadow: 2px 2px 5px #000;
  transition: transform 0.5s ease-in-out;

  &:hover {
    border-color: #ff9100;
    background-image: ${(props) =>
      props.variant === 'primary'
        ? 'linear-gradient( 0deg,#2f2f2f 0%,#0000008c 100%)'
        : 'linear-gradient(120deg,#9e9797cc 0%,#c14343 100%)'};
    &::before {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }

    & img {
      transition: transform 0.5s ease-in-out;
      transform: scale(1.2);
    }

    & h2 {
      color: #fbf5ee;
      transition: color 0.5s ease-in-out;
    }
  }
  @media screen and (min-width: 680px) {
    width: calc(100% / 4 - 30px);
    margin: 15px;
    transform: ${(props) => (props.variant === 'primary' ? 'translateY(-8%)' : 'unset')};
  }
`

const HeroLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 25px 25px 0;
`

const ImageDiv = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    opacity: 1;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }

  & > img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: -4px;
    transform: ${(props) => (props.variant === 'primary' ? 'scale(1.2)' : 'scale(1)')};
  }
`

const HeroName = styled.h2`
  color: ${(props) => (props.variant === 'primary' ? backgroundColor : 'gray')};
  font-weight: ${(props) => (props.variant === 'primary' ? 900 : 500)};
  letter-spacing: 3px;
  position: relative;
`

export { StyledGrid, HeroLink, ImageDiv, HeroName }

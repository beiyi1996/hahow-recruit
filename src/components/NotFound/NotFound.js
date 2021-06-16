import React from 'react'
import styled from 'styled-components'
import NotFoundSvg from '../images/404.svg'
import backgroundColor from '../theme'

export default function NotFound() {
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

  return (
    <StyledNotFoundDiv variant="primary">
      <StyledSVG src={NotFoundSvg} alt="404 page not found." />
      <StyledH2 variant="default">抱歉, 我們找不到這一頁...</StyledH2>
    </StyledNotFoundDiv>
  )
}

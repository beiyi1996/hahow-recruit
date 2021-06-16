import React from 'react'
import NotFoundSvg from '../../images/404.svg'
import { StyledNotFoundDiv, StyledSVG, StyledH2 } from './NotFoundCSS'

export default function NotFound() {
  return (
    <StyledNotFoundDiv variant="primary">
      <StyledSVG src={NotFoundSvg} alt="404 page not found." />
      <StyledH2 variant="default">抱歉, 我們找不到這一頁...</StyledH2>
    </StyledNotFoundDiv>
  )
}

import React from 'react'
import SystemErrorSVG from '../../images/500.svg'
import { StyledSystemErrorDiv, StyledSVG, StyledH2 } from './SystemErrorCSS'

export default function SystemError() {
  return (
    <StyledSystemErrorDiv variant="primary">
      <StyledSVG src={SystemErrorSVG} alt="500 system error." />
      <StyledH2 variant="default">500, 系統錯誤！</StyledH2>
    </StyledSystemErrorDiv>
  )
}

import React from 'react'
import styled from 'styled-components'
import SystemErrorSVG from '../images/500.svg'
import backgroundColor from '../theme'

export default function SystemError() {
  const StyledSystemErrorDiv = styled.div`
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
    <StyledSystemErrorDiv variant="primary">
      <StyledSVG src={SystemErrorSVG} alt="500 system error." />
      <StyledH2 variant="default">500, 系統錯誤！</StyledH2>
    </StyledSystemErrorDiv>
  )
}

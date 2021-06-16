import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { StyledBackdrop } from './LoadingCSS'

export default function Loading({ open, position }) {
  return (
    <StyledBackdrop open={open} position={position}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  )
}

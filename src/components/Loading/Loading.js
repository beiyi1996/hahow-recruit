import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { StyledBackdrop } from './LoadingCSS'

export default function Loading({ open, absolute }) {
  return (
    <StyledBackdrop open={open} absolute={absolute}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  )
}

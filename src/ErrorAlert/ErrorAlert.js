import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import { ContextStore } from '../store/contextStore'

const StyledDiv = styled.div`
  width: auto;
  position: fixed;
  top: 30px;
  right: 30px;
  & > * + * {
    margin-top: 16px;
  }
`

export default function SimpleAlerts() {
  const { APIError } = useContext(ContextStore)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (APIError.code > 0) {
      setOpen(true)
    }
  }, [APIError])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <StyledDiv>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity={APIError.code === 200 ? 'success' : 'error'} onClose={handleClose}>
          {APIError.message}
        </Alert>
      </Snackbar>
    </StyledDiv>
  )
}

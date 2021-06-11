import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const Card = styled(Paper)`
  height: 140px;
  width: calc(100% / 4 - 50px);
  margin: 0 25px;
  & > img {
    width: 100%;
  }
`

export default function HeroCard({ value }) {
  return (
    <Card>
      <p>{value.name}</p>
      <img src={value.image} alt={value.name} />
    </Card>
  )
}

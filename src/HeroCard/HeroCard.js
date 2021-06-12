import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const Card = styled(Paper)`
  width: calc(100% / 2 - 20px);
  margin: 10px;
  padding: 0 25px 25px;
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  & > a > img {
    width: 100%;
  }
  @media screen and (min-width: 680px) {
    width: calc(100% / 4 - 30px);
    margin: 15px;
  }
`

const HeroLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  display: inline-block;
  width: 100%;
`

export default function HeroCard({ value }) {
  return (
    <Card bordercolor={'red'}>
      <HeroLink to={`/heroes/${value.id}`} replace>
        <h3>{value.name}</h3>
        <img src={value.image} alt={value.name} />
      </HeroLink>
    </Card>
  )
}

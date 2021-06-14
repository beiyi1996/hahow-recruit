import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import backgroundColor from '../theme'
import Grid from '@material-ui/core/Grid'

const StyledGrid = styled(Grid)`
  width: calc(100% / 2 - 20px);
  margin: 10px;
  padding: 25px 25px 0;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${(props) => (props.focus === 'true' ? backgroundColor : 'black')};
  & > a > img {
    width: 100%;
    border-radius: 8px;
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
  const { heroId } = useParams()

  return (
    <StyledGrid variant="primary" focus={heroId === value.id ? 'true' : 'false'}>
      <HeroLink to={`/heroes/${value.id}`} replace>
        <img src={value.image} alt={value.name} />
        <h3>{value.name}</h3>
      </HeroLink>
    </StyledGrid>
  )
}

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import HeroCard from '../HeroCard'
import { getHeros } from './HeroListAPI'

const StyledGrid = styled(Grid)`
  flex-grow: 1;
  padding: 30px 0;
`

export default function HeroList() {
  const [heroList, setHeroList] = useState([])

  useEffect(() => {
    console.log('componentDidMount...')
    async function getHeroList() {
      const res = await getHeros()
      setHeroList(res.data)
    }

    getHeroList()
  }, [])

  return (
    <Container maxWidth="lg">
      <StyledGrid container spacing={2}>
        {heroList.map((value) => (
          <HeroCard value={value} key={value.id} />
        ))}
      </StyledGrid>
    </Container>
  )
}

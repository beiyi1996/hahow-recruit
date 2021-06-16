import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import HeroCard from '../HeroCard'
import { StyledGrid } from './HeroListCSS'
import { getHeros } from './HeroListAPI'

export default function HeroList() {
  const [heroList, setHeroList] = useState([])

  useEffect(() => {
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

import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import HeroCard from '../HeroCard'
import Loading from '../Loading'
import { StyledGrid } from './HeroListCSS'
import { getHeros } from './HeroListAPI'

export default function HeroList() {
  const [openLoading, setOpenLoading] = useState(false)
  const [heroList, setHeroList] = useState([])

  useEffect(() => {
    setOpenLoading(true)

    async function getHeroList() {
      const res = await getHeros()
      setHeroList(res.data)
      setOpenLoading(false)
    }

    getHeroList()
  }, [])

  return (
    <Container maxWidth="lg">
      <Loading open={openLoading} />
      <StyledGrid container spacing={2}>
        {heroList.map((value) => (
          <HeroCard value={value} key={value.id} />
        ))}
      </StyledGrid>
    </Container>
  )
}

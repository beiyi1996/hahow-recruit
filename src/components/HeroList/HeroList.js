import React, { useEffect, useState, useContext } from 'react'
import Container from '@material-ui/core/Container'
import HeroCard from '../HeroCard'
import Loading from '../Loading'
import { StyledGrid } from './HeroListCSS'
import { getHeros } from './HeroListAPI'
import { ContextStore } from '../../store/contextStore'

export default function HeroList() {
  const [openLoading, setOpenLoading] = useState(false)
  const [heroList, setHeroList] = useState([])
  const { APIErrorDispatch } = useContext(ContextStore)

  useEffect(() => {
    setOpenLoading(true)

    async function getHeroList() {
      const res = await getHeros()

      if (res.status !== 200) {
        APIErrorDispatch({ type: 'SET_ERROR', payload: { code: res.status, message: res.data } })
        return
      }

      setHeroList(res.data)
      setOpenLoading(false)
    }

    getHeroList()
  }, [APIErrorDispatch])

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

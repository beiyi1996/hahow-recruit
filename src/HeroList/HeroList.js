import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import HeroCard from '../HeroCard'
import { getHeros } from './HeroListAPI'

const StyledCounter = styled(Grid)`
  flexgrow: 1;
  flex-decrection: column;
`

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
    <StyledCounter container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {heroList.map((value) => (
            <HeroCard value={value} key={value.id} />
          ))}
        </Grid>
      </Grid>
    </StyledCounter>
  )
}

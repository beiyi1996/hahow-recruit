import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { getHeroProfile, patchHeroProfile } from './HeroProfileAPI'

export default function HeroProfile({ id }) {
  const [profile, setProfile] = useState({ str: 0, int: 0, agi: 0, luk: 0 })
  const [powerTotal, setPowerTotal] = useState(30)

  useEffect(() => {
    async function getHeroProfileInfo() {
      const res = await getHeroProfile(id)
      setProfile(res.data)
    }

    getHeroProfileInfo()
  }, [id])

  const handlePatchHeroProfile = async () => {
    const res = await patchHeroProfile(id, profile)
    console.log('patch res', res)
  }

  return (
    <Grid item>
      <Box>
        <p>{profile.str}</p>
        <p>{profile.int}</p>
        <p>{profile.agi}</p>
        <p>{profile.luk}</p>
      </Box>
      <p>{powerTotal}</p>
      <Button onClick={handlePatchHeroProfile}>Submit</Button>
    </Grid>
  )
}

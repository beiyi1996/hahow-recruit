import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'
import { getHeroProfile, patchHeroProfile } from './HeroProfileAPI'

const StyledGrid = styled(Grid)`
  div& {
    margin: 20px auto;
  }
`

export default function HeroProfile() {
  const { heroId } = useParams()
  const [profile, setProfile] = useState({ str: 0, int: 0, agi: 0, luk: 0 })
  const [powerSum, setPowerSum] = useState(0)
  const [skillKeys, setSkillKeys] = useState([])

  useEffect(() => {
    async function getHeroProfileInfo() {
      const res = await getHeroProfile(heroId)
      const skillKeys = Object.keys(res.data)

      setProfile(res.data)
      setSkillKeys(skillKeys)
    }

    getHeroProfileInfo()
  }, [heroId])

  const handlePatchHeroProfile = async () => {
    const res = await patchHeroProfile(heroId, profile)
    console.log('patch res', res)
  }

  return (
    <StyledGrid item>
      {skillKeys.map((key) => (
        <Box key={key}>
          {key.toUpperCase()}
          <IconButton color="primary" aria-label="">
            <AddRoundedIcon />
          </IconButton>
          {profile[key]}
          <IconButton color="primary" aria-label="">
            <RemoveRoundedIcon />
          </IconButton>
        </Box>
      ))}
      <p>剩餘點數 : {powerSum}</p>
      <Button onClick={handlePatchHeroProfile}>Submit</Button>
    </StyledGrid>
  )
}

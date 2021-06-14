import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'
import { getHeroProfile, patchHeroProfile } from './HeroProfileAPI'
import backgroundColor from '../theme'
import ErrorAlert from '../ErrorAlert'
import { ContextStore } from '../store/contextStore'

const StyledGrid = styled(Grid)`
  div& {
    margin: 20px auto;
  }
`

const StyledIconButton = styled(IconButton)`
  color: ${backgroundColor};
`

export default function HeroProfile() {
  const { heroId } = useParams()
  const [profile, setProfile] = useState({ str: 0, int: 0, agi: 0, luk: 0 })
  const [abilitySum, setAbilitySum] = useState(0)
  const [restPoint, setRestPoint] = useState(0)
  const [skillKeys, setSkillKeys] = useState([])
  const [changeAbility, setChangeAbility] = useState(false)
  const [disabledIncrease, setDisabledIncrease] = useState({ str: true, int: true, agi: true, luk: true })
  const [disabledDecrease, setDisabledDecrease] = useState({ str: false, int: false, agi: false, luk: false })
  const { APIError, APIErrorDispatch } = useContext(ContextStore)

  useEffect(() => {
    async function getHeroProfileInfo() {
      const res = await getHeroProfile(heroId)
      const skillKeys = Object.keys(res.data)
      const abilitySum = Object.values(res.data).reduce((acc, curr) => acc + curr)

      setProfile(res.data)
      setSkillKeys(skillKeys)
      setAbilitySum(abilitySum)
    }

    getHeroProfileInfo()
  }, [heroId])

  useEffect(() => {
    // 當能力值為 0 時, 需把 減少能力值的按鈕 disabled
    // 當目前的能力值總和 = abilitySum 時, 需把 增加能力值的按鈕 disabled
    if (changeAbility) {
      Object.keys(profile).forEach((key) => {
        if (profile[key] === 0) {
          setDisabledDecrease((prevDisabledDecrease) => {
            return { ...prevDisabledDecrease, [key]: true }
          })
        }
      })

      const currAbilitySum = Object.values(profile).reduce((acc, curr) => acc + curr)
      if (currAbilitySum === abilitySum) {
        setDisabledIncrease({ str: true, int: true, agi: true, luk: true })
        setDisabledDecrease({ str: false, int: false, agi: false, luk: false })
      }
    }
  }, [profile, changeAbility, abilitySum])

  const handleChangePower = (key, actionType) => {
    setChangeAbility(true)
    if (actionType === 'increase') {
      setProfile({ ...profile, [key]: profile[key] + 1 })
      setRestPoint(restPoint - 1)
      return
    }

    if (actionType === 'decrease') {
      setProfile({ ...profile, [key]: profile[key] - 1 })
      setRestPoint(restPoint + 1)
      setDisabledIncrease(false)
      return
    }
  }

  const handlePatchHeroProfile = async () => {
    if (restPoint > 0) {
      APIErrorDispatch({ type: 'SET_ERROR', payload: { code: 400, message: '能力點數未設置完全。' } })
      return
    }

    const res = await patchHeroProfile(heroId, profile)

    if (res.data === 'OK') {
      APIErrorDispatch({ type: 'SET_SUCCESS', payload: { message: '修改成功。' } })
      return
    }
    APIErrorDispatch({ type: 'SET_ERROR', payload: res.data })
  }

  return (
    <StyledGrid item>
      {skillKeys.map((key) => (
        <Box key={key}>
          {key.toUpperCase()}
          <StyledIconButton
            variant="secondary"
            aria-label=""
            disabled={disabledIncrease[key]}
            onClick={() => handleChangePower(key, 'increase')}
          >
            <AddRoundedIcon />
          </StyledIconButton>
          {profile[key]}
          <StyledIconButton
            variant="secondary"
            aria-label=""
            disabled={disabledDecrease[key]}
            onClick={() => handleChangePower(key, 'decrease')}
          >
            <RemoveRoundedIcon />
          </StyledIconButton>
        </Box>
      ))}
      <p>剩餘點數 : {restPoint}</p>
      <Button onClick={handlePatchHeroProfile}>儲存</Button>
      {APIError.code > 0 && <ErrorAlert />}
    </StyledGrid>
  )
}

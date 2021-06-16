import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'
import LukIcon from '@material-ui/icons/StarsRounded'
import AgiIcon from '@material-ui/icons/FlashOnRounded'
import IntIcon from '@material-ui/icons/EmojiObjectsRounded'
import StrIcon from '@material-ui/icons/FitnessCenterRounded'
import { getHeroProfile, patchHeroProfile } from './HeroProfileAPI'
import ErrorAlert from '../ErrorAlert'
import { ContextStore } from '../../store/contextStore'
import {
  StyledGrid,
  StyledBox,
  StyledAbilityDiv,
  StyledIcon,
  StyledSpan,
  StyledIconButton,
  StyledRestPoint,
  StyledButton,
} from './HeroProfileCSS'

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
  const icons = [StrIcon, IntIcon, AgiIcon, LukIcon]

  useEffect(() => {
    setRestPoint(0)
    console.log('hero id effect...')

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
    const cloneProfile = { ...profile }
    Object.keys(profile).forEach((key) => {
      if (profile[key] === 0) {
        cloneProfile[key] = true
      } else {
        cloneProfile[key] = false
      }
    })

    setDisabledDecrease(cloneProfile)
  }, [profile])

  useEffect(() => {
    // 當能力值為 0 時, 需把 減少能力值的按鈕 disabled
    // 當目前的能力值總和 = abilitySum 時, 需把 增加能力值的按鈕 disabled
    if (changeAbility) {
      const cloneProfile = { ...profile }
      Object.keys(profile).forEach((key) => {
        if (profile[key] === 0) {
          cloneProfile[key] = true
        } else {
          cloneProfile[key] = false
        }
      })
      setDisabledDecrease(cloneProfile)

      const currAbilitySum = Object.values(profile).reduce((acc, curr) => acc + curr)
      if (currAbilitySum === abilitySum) {
        setDisabledIncrease({ str: true, int: true, agi: true, luk: true })
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
    <Container maxWidth="lg">
      <StyledGrid item>
        <StyledBox>
          {skillKeys.map((key, idx) => {
            const Icon = icons[idx]
            return (
              <StyledAbilityDiv key={key}>
                <StyledIcon variant="primary">
                  <Icon />
                </StyledIcon>
                <StyledSpan variant="primary">{key.toUpperCase()}</StyledSpan>
                <StyledIconButton
                  variant="secondary"
                  aria-label=""
                  disabled={disabledIncrease[key]}
                  onClick={() => handleChangePower(key, 'increase')}
                >
                  <AddRoundedIcon />
                </StyledIconButton>
                <StyledSpan variant="primary">{profile[key]}</StyledSpan>
                <StyledIconButton
                  variant="secondary"
                  aria-label=""
                  disabled={disabledDecrease[key]}
                  onClick={() => handleChangePower(key, 'decrease')}
                >
                  <RemoveRoundedIcon />
                </StyledIconButton>
              </StyledAbilityDiv>
            )
          })}
        </StyledBox>
        <StyledBox>
          <StyledRestPoint variant="primary">REMAINING POINT : {restPoint}</StyledRestPoint>
          <StyledButton variant="secondary" onClick={handlePatchHeroProfile}>
            SAVE
          </StyledButton>
        </StyledBox>
      </StyledGrid>
      {APIError.code > 0 && <ErrorAlert />}
    </Container>
  )
}

import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'
import { getHeroProfile, patchHeroProfile } from './HeroProfileAPI'
import backgroundColor from '../../theme'
import ErrorAlert from '../ErrorAlert'
import LukIcon from '@material-ui/icons/StarsRounded'
import AgiIcon from '@material-ui/icons/FlashOnRounded'
import IntIcon from '@material-ui/icons/EmojiObjectsRounded'
import StrIcon from '@material-ui/icons/FitnessCenterRounded'
import { ContextStore } from '../../store/contextStore'

const StyledGrid = styled(Grid)`
  width: 100%;
  div& {
    margin: 20px auto;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    background-image: linear-gradient(0deg, #101010 0%, #da8a22a6 100%);
  }
  @media screen and (min-width: 680px) {
    div& {
      flex-direction: row;
    }
  }
`

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  &:last-child {
    margin-top: 12px;
    justify-content: flex-end;
  }

  @media screen and (min-width: 680px) {
    width: 50%;

    &:last-child {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
`

const StyledAbilityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  & > * {
    margin: 0 5px;
  }

  @media screen and (min-width: 500px) {
    width: 100%;
  }

  @media screen and (min-width: 980px) {
    width: 55%;
  }
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 35px;
  color: ${backgroundColor};
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 3px;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (min-width: 980px) {
    &:first-child {
      margin-left: 5px;
    }
  }
`

const StyledIconButton = styled.button`
  color: #fbf5ee;
  border-radius: 50%;
  background-color: ${backgroundColor};
  height: 48px;
  width: 48px;
  border: 1px solid ${backgroundColor};
  transition: all 250ms linear;

  &:not(:disabled) {
    box-shadow: 1px 1px 2px #000;
  }

  &:disabled {
    background-color: transparent;
    border: 1px solid darkgray;
    color: darkgray;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: ${backgroundColor};
    border-color: #8e252c;
    box-shadow: unset;
  }
`

const StyledRestPoint = styled.p`
  color: ${backgroundColor};
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 24px;
`

const StyledButton = styled.button`
  font-family: 'MarvelFont';
  background-color: ${backgroundColor};
  box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  width: 50%;
  font-weight: 900;
  font-size: 20px;
  box-shadow: 1px 1px 2px #fbf5ee;
  letter-spacing: 3px;
  transition: all 250ms linear;

  &:hover {
    cursor: pointer;
    box-shadow: unset;
  }
`

const StyledIcon = styled.div`
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
  const icons = [StrIcon, IntIcon, AgiIcon, LukIcon]

  useEffect(() => {
    setRestPoint(0)

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

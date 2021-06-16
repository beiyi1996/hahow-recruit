import React from 'react'
import { useParams } from 'react-router-dom'
import { StyledGrid, HeroLink, ImageDiv, HeroName } from './HeroCardCSS'

export default function HeroCard({ value }) {
  const { heroId } = useParams()
  const variant = heroId === value.id ? 'primary' : 'default'

  return (
    <StyledGrid variant={variant}>
      <HeroLink to={`/heroes/${value.id}`} replace>
        <ImageDiv variant={variant}>
          <img src={value.image} alt={value.name} />
        </ImageDiv>
        <HeroName variant={variant}>{value.name.toUpperCase()}</HeroName>
      </HeroLink>
    </StyledGrid>
  )
}

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'
import HeroVideo from '../../elements/hero-video/component'

const StyledHero = styled.div`
  min-height: 350px;
  background-image: url('/static/assets/background-hero.jpg');
  background-repeat: no-repeat;
    background-position: right 0px bottom 42%;
  background-size: 120%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 7rem;
  @media (max-width: 1060px) {
    background-position: 46% center;
    background-size: cover;
  }
`

const Hero = () => (
  <StyledHero>
    <HeroTitle>Plataforma de Participación Ciudadana en Propuestas de Ley</HeroTitle>
    <HeroSubtitle>¡Participe haciendo comentarios y sugerencias para co-crear mejores leyes!</HeroSubtitle>
    <HeroVideo youtubeId='r9hZuc72C48' />
  </StyledHero>
)

export default Hero

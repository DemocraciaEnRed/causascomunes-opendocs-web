import React from 'react'
import styled from 'styled-components'

const StyledSecondaryNavbarTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-azul-principal);
  text-transform: uppercase;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Span = styled.span`
  font-family: var(--bold);
`

const SecondaryNavbarTitle = () => (
  <StyledSecondaryNavbarTitle>
   Portal de <Span>Propuestas</Span>
  </StyledSecondaryNavbarTitle>
)

export default SecondaryNavbarTitle

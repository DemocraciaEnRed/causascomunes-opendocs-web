import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledSecondaryNavbarTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-azul-principal);
  text-transform: uppercase;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
  &:hover{
    cursor: pointer;
  }
`
const Span = styled.span`
  font-family: var(--bold);
`

const SecondaryNavbarTitle = () => (
  <Link href='/'>
    <StyledSecondaryNavbarTitle>
      Portal de <Span>Propuestas</Span>
    </StyledSecondaryNavbarTitle>
  </Link>
)

export default SecondaryNavbarTitle

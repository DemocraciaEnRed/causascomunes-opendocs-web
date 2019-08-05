import React from 'react'
import styled from 'styled-components'
import FooterTextWrapper from '../../elements/footer-text-wrapper/component'
import P from '../../elements/footer-text/component'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
`

const Footer = () => (
  <FooterWrapper>
    <FooterTextWrapper>
      <P>&nbsp;</P>
      <P>&nbsp;</P>
    </FooterTextWrapper>
  </FooterWrapper>
)

export default Footer

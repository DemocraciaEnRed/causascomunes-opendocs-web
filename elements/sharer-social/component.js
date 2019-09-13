import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../../elements/social-icon/component'

const SocialWrapper = styled.div`
  display:flex;
  flex-direction:column;
  // width:6.7rem;
  // margin-left:auto;
  @media(max-width:700px){
    margin-left:0px;
  }
`
const IconWrapper = styled.div`
  display:flex;
  justify-content:space-between;`

const SocialSpan = styled.span`
  font-size:1.6rem;
  font-family:var(--bold);
  color:#4a5d68;
  margin-bottom:1rem;
  text-align: center;
  `
export default ({ id }) => {
  const socialLinksUrl = (window.location.origin + '/articulado?id=' + id)
  const twitterText = encodeURIComponent('Una de las propuestas de Causas Comunes')
  const twitterHashtag = encodeURIComponent('CausasComunes')
  const twitterLink = 'https://twitter.com/intent/tweet?url='+socialLinksUrl+'&text='+twitterText+'&via=causas_comunes&lang=es'

  return (
    <SocialWrapper>
      <SocialSpan>Compartir</SocialSpan>
      <IconWrapper>
        <SocialIcon
          img={'/static/assets/facebook-icon.svg'}
          link={`http://www.facebook.com/sharer/sharer.php?u=${socialLinksUrl}`}
          target={'_blank'}
          rel={'noopener noreferrer'} />

        <SocialIcon img={'/static/assets/twitter-icon.svg'}
          link={twitterLink}
          target={'_blank'}
          rel={'noopener noreferrer'} />
      </IconWrapper>
    </SocialWrapper>
  )
}

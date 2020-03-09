import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const Wrapper = styled.div`
display:flex;
align-items:flex-start;
text-align:left;
margin-bottom:2rem;
min-width:150px;
`
const Avatar = styled.div`
  width: 40px;
  min-width:40px;
  height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.img ? `${props.img}` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
  cursor: pointer;
`
const Name = styled.div`
color: #2d4b5e;
font-size: 1.4rem;
font-family:var(--bold);
cursor: pointer;
min-width:100px;
`
const Party = styled.div`
font-size:1.2rem;
color: #5c97bc;
text-transform:uppercase;
display:flex;
margin-top:.7rem;
align-items:center;
`

const TextWrapper = styled.div`
height:35px;
margin-top:3px;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const IconWrapper = styled.div`
  padding-right:.5rem;`

const causas_data = {
  //trabajo
  '5d7a9b11ee136700188ea5c0': {img: '/static/assets/iconos-causas/trabajo_icon_color_fill.png', name: 'Causas Comunes + Observatorio de Derechos de Internet en Argentina'},
  //ambiente
  '5d7a9b68ee136700188ea5c2': {img: '/static/assets/iconos-causas/ambiente_icon_color_fill.png', name: 'Causas Comunes + Senador Pino Solanas'},
  //genero
  '5d7a9c23ee136700188ea5c6': {img: '/static/assets/iconos-causas/genero_icon_color_fill.png', name: 'Causas Comunes + Economía Feminista'},
  //vivienda
  '5d7a9a8aee136700188ea5be': {img: '/static/assets/iconos-causas/vivienda_icon_color_fill.png', name: 'Causas Comunes + Federación Nacional de Inquilinos'},
  //drogas
  '5d8a2a8cee136700188ea5e8': {img: '/static/assets/iconos-causas/drogas_icon_color_fill.png', name: 'Causas Comunes + Campaña Nacional por la Regulación del Cannabis'},
  //transparencia
  '5d78f015ee136700188ea5bc': {img: '/static/assets/iconos-causas/transparencia_icon_color_fill.png', name: 'Causas Comunes + Directorio Legislativo'}
};

const CausaAvatar = ({ projectId }) => (
  <Wrapper>
    <Avatar img={causas_data[projectId] ? causas_data[projectId].img : null} />
    <TextWrapper>
      <Name>{causas_data[projectId] ? causas_data[projectId].name : 'Causas Comunes'}</Name>
      <Party>
        <p></p>
      </Party>
    </TextWrapper>
  </Wrapper>
)

CausaAvatar.propTypes = {
  projectId: PropTypes.string.isRequired
}

export default CausaAvatar

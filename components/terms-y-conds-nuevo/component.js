import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoBold from '../../elements/static-info-bold/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Términos y condiciones</StaticInfoTitle>
    <StyledDiv>
        <StaticInfoBold>
      Descripción
        </StaticInfoBold>
      <StaticInfoP>
        El presente documento describe los Términos y Condiciones aplicables al uso de la Plataforma de Elaboración Colaborativa de Propuestas de Ley de diputadas/os nacionales (en adelante, la <em>“Plataforma”</em>) de la Honorable Cámara de Diputados de la Nación Argentina. (en adelante, la <em>“HCDN”</em>).
      </StaticInfoP>
      <StaticInfoP>
        Cualquier persona (en adelante el “Usuario”) que desee usar la plataforma, deberá leer, entender y aceptar todas las condiciones generales establecidas por los presentes Términos y Condiciones de Uso, la Política de Privacidad junto con las demás políticas y principios.
      </StaticInfoP>
    </StyledDiv>
  </section>
)

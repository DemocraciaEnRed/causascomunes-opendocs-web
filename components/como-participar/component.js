import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/download'
import StaticInfoTitle from '../../elements/static-info-title/component'
import ComoParticiparWrapper from '../../elements/como-participar-wrapper/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoBold from '../../elements/static-info-bold/component'

const ManualLink = styled.span`
  text-decoration: underline
  color: #5c97bc;
  &:hover{
    cursor: pointer;
  }
`

export default () => (
  <section>
    <StaticInfoTitle>Cómo participar</StaticInfoTitle>
    <ComoParticiparWrapper>
      <StaticInfoBold>
        ¿Cómo funciona?
      </StaticInfoBold>
      <StaticInfoP>
        En esta plataforma encontrarás propuestas formuladas como Proyectos de Ley, elaborados y presentados por organizaciones o referentes temáticos de seis áreas diferentes. Creemos que estos proyectos pueden ser enriquecidos con tu punto de vista; así, podés hacer aportes, comentarios y sugerencias
      </StaticInfoP>
      <StaticInfoP>
        Las organizaciones que elaboraron los proyectos analizarán tus <strong>aportes</strong> a la propuesta y a partir de ellos realizarán cambios para construir una versión final del texto que sea mejor, que sea más robusta.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué entendemos por <em>aporte</em>?
      </StaticInfoBold>
      <StaticInfoP>
        Un aporte se hace seleccionando una parte específica del texto que llame tu atención. Una vez seleccionada, podrás hacer una sugerencia, una crítica o un complemento al texto que has seleccionado. 
      </StaticInfoP>
      <StaticInfoP>
        Lxs usuarixs cuyos aportes fueran incorporados, serán consideradxs colaboradores en la redacción de la propuesta.
      </StaticInfoP>
      <StaticInfoP>Para más detalles sobre las funcionalidades básicas de esta plataforma descargue/consulte el <Icon icon={download} size={16} /> <Link href='/static/files/Causas Comues _ Manual de Usuario.pdf'><ManualLink>Manual de usuario</ManualLink></Link></StaticInfoP>
    </ComoParticiparWrapper>
  </section>
)

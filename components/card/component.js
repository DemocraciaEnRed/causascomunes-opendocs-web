import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardContent from '../../elements/card-content/component'
import CardSocial from '../../elements/card-social/component'

const CardContainer = styled.div`
  margin: 0 1% 30px;
  width: 23%;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.05);
  background-color: #ffffff;
  border: solid 1px #e9e9e9;
  background: #fff;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  position: relative;
  @media (max-width: 1408px) {
    width: 31%;
    }
  @media (max-width: 1216px) {
    width: 48%;
    }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const baseImgDir = '/static/assets/images-banners-propuestas'
// const causasImgs = {
//   // ambiente
//   '5d7a9b68ee136700188ea5c2': `${baseImgDir}/banner-ambiente.jpg`,
//   // drogas
//   '5d8a2a8cee136700188ea5e8': `${baseImgDir}/banner-drogas.jpg`,
//   // genero
//   '5d7a9c23ee136700188ea5c6': `${baseImgDir}/banner-genero.jpg`,
//   // trabajo
//   '5d7a9b11ee136700188ea5c0': `${baseImgDir}/banner-trabajo.jpg`,
//   // transparencia
//   '5d78f015ee136700188ea5bc': `${baseImgDir}/banner-transparencia.jpg`,
//   // vivienda
//   '5d7a9a8aee136700188ea5be': `${baseImgDir}/banner-vivienda.jpg`,
// }

const Card = ({ project }) => (
  <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>
    <CardContainer>
      <CardHeader hasImage={!!project.currentVersion.content.imageCover} img={project.currentVersion.content.imageCover ? project.currentVersion.content.imageCover : null } published={project.published} />
      <CardContent
        title={project.currentVersion.content.title}
        authorId={project.author._id}
        userId={project.author._id}
        name={project.author.fullname}
        hasImage={!!project.currentVersion.content.imageCover}
        party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''}
        projectId={project.id} />
      <CardSocial commentaries={project.commentsCount}
        closed={project.closed}
        apoyosCount={project.apoyosCount} />
    </CardContainer>
  </Link>
)

Card.propTypes = {
  project: PropTypes.object.isRequired
}

export default Card

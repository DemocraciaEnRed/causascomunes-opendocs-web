import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardContent from '../../elements/card-content/component'
import CardSocial from '../../elements/card-social/component'

const CardContainer = styled.div`
  width: 370px;
  height: 390px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 1px #e9e9e9;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background: #fff;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 2rem;
`

const baseImgDir = '/static/assets/images-banners-propuestas'
const causasImgs = {
  // ambiente
  '5d7a9b68ee136700188ea5c2': `${baseImgDir}/banner-ambiente.jpg`,
  // drogas
  '5d8a2a8cee136700188ea5e8': `${baseImgDir}/banner-drogas.jpg`,
  // genero
  '5d7a9c23ee136700188ea5c6': `${baseImgDir}/banner-genero.jpg`,
  // trabajo
  '5d7a9b11ee136700188ea5c0': `${baseImgDir}/banner-trabajo.jpg`,
  // transparencia
  '5d78f015ee136700188ea5bc': `${baseImgDir}/banner-transparencia.jpg`,
  // vivienda
  '5d7a9a8aee136700188ea5be': `${baseImgDir}/banner-vivienda.jpg`,
}

const Card = ({ project }) => (
  <Link href={{ pathname: '/articulado', query: { id: project._id } }}>
    <a>
      <CardContainer>
        <CardHeader img={ project.id in causasImgs ? causasImgs[project.id] : project.currentVersion.content.imageCover } published={project.published} />
        <CardContent
          title={project.currentVersion.content.title}
          authorId={project.author._id}
          userId={project.author._id}
          name={project.author.fullname}
          party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''}
          projectId={project.id} />
      </CardContainer>
    </a>
  </Link>
)

Card.propTypes = {
  project: PropTypes.object.isRequired
}

export default Card

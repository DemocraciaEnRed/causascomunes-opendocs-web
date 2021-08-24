import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { checkSquareO } from 'react-icons-kit/fa/checkSquareO'
import { squareO } from 'react-icons-kit/fa/squareO'
import ProjectHeaderWrapper from '../../elements/project-header-wrapper/component'
// import CausaAvatar from '../../elements/causa-avatar/component'
import UserAvatar from '../../elements/user-avatar/component'
import ProjectVersionData from '../../components/project-version-data/component'
import FundationTitle from '../../components/fundation-title/component'
import ProjectTitle from '../../elements/project-title/component'
import ProjectLimitDate from '../../elements/project-limit-date/component'
import ProjectEditMode from '../../elements/project-edit-mode/component'
import TogglePublish from '../../components/project-toggle-publish/component'
import ProjectHeaderLink from '../../elements/project-header-link/component'
import ClosingDate from '../../elements/closing-date/component'
import ArticlesCommentsCounter from '../../elements/articles-comments-counter/component'
import ProjectBreadcrumb from '../project-breadcrumb/component'
import ClosedProposal from '../closed-proposal/component'
import SharerSocial from '../../elements/sharer-social/component'
import ModeBar from '../../components/mode-bar/component'
import ModeButton from '../../elements/mode-button/component'
import ModeBarLinkButton from '../../elements/mode-bar-link-button/component'

const ProjectHeaderContainer = styled.div`
  min-height: 383px;
  width:100%;
  background-color: #1b95ba;
  background-image: url(${'/static/assets/bg-mosaico.png'});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
`
const TopBarWrapper = styled.div`
  display: flex;
  flex-direction:row;
  @media (max-width:500px){
    flex-wrap:wrap;
  }
  min-height:60px;
  justify-content:flex-start;
  width: 100%;
  margin-right: 3%;
  & > div {
    padding: 0 1.5rem;
    border-right: 1px solid #e9e9e9;
    height: 50px;
    @media (max-width:510px){
      border:none;
    }
  }
  & > div:first-child {
    padding-left:0px;
  }
  & > div:last-child {
    border-right: none;
    padding-right:0px;
  }
  `

const ProjectHeader = ({ project, section, isPublished, isAuthor, setPublish, togglePublish, contextualCommentsCount, contributionsCount, contributorsCount, currentSection, withComments }) => (
  <ProjectHeaderContainer img={project.currentVersion.content.imageCover}>
    <ProjectBreadcrumb
      title={project.currentVersion.content.title}
      id={project._id}
      section={section} />
    <ProjectHeaderWrapper>
      <TopBarWrapper>
        <UserAvatar headerbar
          proyectId={project._id}
          authorId={project.author._id}
          userId={project.author._id}
          name={project.author.fullname}
          party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
        <ProjectVersionData
          version={project.currentVersion.version}
          createdAt={project.currentVersion.createdAt} />
        {!project.closed
          ? <ProjectLimitDate
            limitDate={project.currentVersion.content.closingDate} />
          : <ClosingDate date={project.currentVersion.content.closingDate} />
        }
        <SharerSocial id={project._id} title={project.currentVersion.content.title} />
        <ProjectEditMode />
        {isAuthor &&
        <TogglePublish project={project} isPublished={isPublished} setPublish={setPublish} togglePublish={togglePublish} />
        }
      </TopBarWrapper>
      { section === '/articulado'
        ? <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>
          <ProjectHeaderLink>
            <ProjectTitle>{project.currentVersion.content.title}</ProjectTitle>
          </ProjectHeaderLink>
        </Link>
        : <FundationTitle
          title={project.currentVersion.content.title}
          isClosed={project.closed} />
      }
      { project.closed &&
        <ClosedProposal
          contributors={contributorsCount}
          contributions={contributionsCount}
          contextualComments={contextualCommentsCount} />
      }
      {currentSection === '/propuesta' &&
        <ModeBar>
          <ModeBarLinkButton active>Presentación</ModeBarLinkButton>
          <ModeBarLinkButton href={{ pathname: '/articulado', query: { id: project._id } }}>Artículos</ModeBarLinkButton>
        </ModeBar>
      }
      {currentSection === '/articulado' &&
        <ModeBar>
          <ModeBarLinkButton href={{ pathname: '/propuesta', query: { id: project._id } }}>Presentación</ModeBarLinkButton>
          <ModeBarLinkButton active>Artículos</ModeBarLinkButton>
          <ModeButton>
            {withComments ? <Icon icon={squareO} size={20} /> : <Icon icon={checkSquareO} size={20} />}&nbsp;
            Modo lectura
          </ModeButton>
        </ModeBar>
      }
    </ProjectHeaderWrapper>
  </ProjectHeaderContainer>
)

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired
}

export default ProjectHeader

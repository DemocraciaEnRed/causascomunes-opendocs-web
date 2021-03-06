import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Section from '../section/component'
import Card from '../../components/card/component'
import TitleH2 from '../../elements/title-h2/component'
import SubtitleH3 from '../../elements/subtitle-h3/component'
import Button from '../../elements/button/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4.8rem 0 1.6rem;
  > div {
    margin-bottom: 56px;
  }
  @media (max-width: 1400px) {
    justify-content: space-around;
  }
`

const OptionChoice = styled.div`
display: inline-block;
margin: 0 5px;
font-size: 1.4rem;
padding: 5px 8px;
border-radius: 4px;
border: 1px solid #2c4c61
cursor: pointer
color: #2c4c61;
&:hover{
  background-color: #2c4c61;
  color: #FFF
}
&:first-child{
  margin-left: 0;
}
&:last-child{
  margin-right: 0;
}
&.disabled{
  color: #777;
  border-color: #777;
}
`
const Options = styled.div`

`
const OptionLabel = styled.div`
font-size: 1.4rem;
color: #2c4c61;
display: inline-block;
padding: 5px 8px;
&:first-child{
  margin-left: 0;
  padding-left: 0;
}
`

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      projectsFiltered: [],
      // page: 1,
      // noMore: false,
      query: {
        created: 'DESC',
        limit: 100,
      },
      filter: {
        closed: null
      }
    }
  }

  createQuery = (sort) => {
    let theQuery = '?' +
      Object.keys(sort).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(sort[key])
      }).join('&');
    console.log(theQuery)
    return theQuery
  }

  async getDocuments () {
    try {
      let query = this.createQuery(this.state.query);
      const projects = await (await fetch(`${API_URL}/api/v1/documents${query}`)).json()
      const projectsFiltered = projects.results.filter((p) => {
        if (this.state.filter.closed !== null) {
          return (this.state.filter.closed === p.closed) && p
        }
        return p
      })
      this.setState({
        projects: projects.results,
        projectsFiltered: projectsFiltered
      })
    } catch (error) {
      console.error(error)
    }
  }

  async componentDidMount() {
    this.getDocuments()
  }

  toggleSort = (parameter, value) => {
    let newQuery = this.state.query
    newQuery[parameter] = value
    this.setState({
      projects: [],
      query: newQuery
    }, () => {
      this.getDocuments()
    })
  }

  toggleFilter = (parameter, value) => {
    let newFilter = this.state.filter
    newFilter[parameter] = value
    this.setState({
      projects: [],
      filter: newFilter
    }, () => {
      this.getDocuments()
    })
  }

  render() {
    const {
      projectsFiltered,
      query,
      filter
    } = this.state
    return (
      <Section id='projects'>
        <TitleH2>Propuestas de ley.</TitleH2>
        <SubtitleH3>Conocé las propuestas de ley que elaboramos de manera participativa y colaborativa. ¡Ayudanos a mejorarlas con tus comentarios y aportes sobre cada causa!</SubtitleH3>
        {projectsFiltered &&
          <Fragment>
            <Grid>
              {projectsFiltered.map((p, i) => (
                <Card project={p} key={i} />
              ))}
            </Grid>
          </Fragment>
        }
      </Section>
    )
  }
}

export default Projects

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import StyledSecondaryNavbarTitle from '../../elements/secondary-navbar-title/component'
import LinkBar from '../../components/link-bar/component'
import Icon from 'react-icons-kit'
import { chevronDown } from 'react-icons-kit/fa/chevronDown'

const SecondaryBar = styled.div`
  height:4rem;
  display: flex;
  justify-content:space-between;
  margin-bottom: 2rem;
  padding-left:5%;
  padding-right:5%;
  padding-top:2rem;
  @media(max-width:700px){
    height:5rem;
  }
`

const NavbarDropdown = styled.div`
  position: relative;
  cursor: pointer;
  &.open {
    > ul {
        display: block;
    }
  }
`;

const NavbarDropdownContent = styled.ul`
    display: none;
    position: absolute;
    background-color: #f6f6f6;
    min-width: 160px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
    z-index: 1;
    left: -10px;
    margin-top: 5px;
    > li {
      color: var(--color-azul-principal);
      display: block;
      padding: 10px 20px;
      font-size: 1.6rem;
      text-transform: uppercase;
      padding: 12px 16px;
      &:hover, &:focus, &:active {
        background-color: var(--color-azul-principal);
        color: #f6f6f6;
      }
      a {
        display: block;
      }
    }
  `;

const links = [
  {
    name: 'Cómo participar',
    hash: '#participate',
    link: '/info?section=como-participar'
  },
  {
    name: 'Acerca de',
    hash: '#about',
    link: '/info?section=acerca-de'
  }
]

const causas = [
  {
    name: 'Trabajo',
    link: 'trabajo',
  },
  {
    name: 'Ambiente',
    link: 'ambiente',
  },
  {
    name: 'Género',
    link: 'genero',
  },
  {
    name: 'Vivienda',
    link: 'vivienda',
  },
  {
    name: 'Drogas',
    link: 'drogas',
  },
  {
    name: 'Transparencia',
    link: 'transparencia',
  },
  {
    name: 'Ciencia',
    link: 'ciencia',
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

const LandingLink = ({ name, value }) => (
  <a onClick={scroll(value)}>{name}</a>
)

const NavbarLink = ({ name, link }) => (
  <Link href={link}>
    <a>
      {name}
    </a>
  </Link>
)

class SecondaryNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown
    }));
  }
  render() {
    return (
      <SecondaryBar>
        <StyledSecondaryNavbarTitle />
        <LinkBar>
          <NavbarDropdown className={"link " + (this.state.showDropdown ? "open" : "")}>
            <span onClick={this.toggleDropdown}>
              Propuestas
              <Icon icon={chevronDown} size={12} />
            </span>
            <NavbarDropdownContent>
              {causas.map((causa, i) => (
                <li key={i}><Link href={causa.link}>{causa.name}</Link></li>
              ))}
            </NavbarDropdownContent>
          </NavbarDropdown>
          {links.map((li, i) => {
            return this.props.isLanding
              ? <LandingLink
                key={i}
                name={li.name}
                value={li.hash} />
              : <NavbarLink
                key={i}
                name={li.name}
                link={li.link} />
          })}
        </LinkBar>
      </SecondaryBar>
    )
  }
}

SecondaryNavbar.propTypes = {
  isLanding: PropTypes.bool
}

export default SecondaryNavbar

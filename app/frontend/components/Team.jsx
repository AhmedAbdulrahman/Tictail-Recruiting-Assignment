import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import TictailTeam from './TictailTeam'
import Spinner from './Spinner'

const Wrapper = styled.div`
  min-height: 100%;
  height: 100px;
`
//const activeClassName = 'nav-item-active'
const NavItem = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  flex: 0;
`
const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  border-color: rgba(0, 0, 0, 0.09);
  color: #000;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 0 70px;
  margin-bottom: 2em;
  z-index: 1;
`
const Hero = styled.div`
  position: relative;
  padding-top: 10px;
  padding-bottom: 50px;
`
const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 100px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  color: #1f1e1d;
  margin-bottom: 60px;
`
const SubTitle = styled.h2`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  line-height: 2;
  letter-spacing: 0.04em;
  opacity: 0.7;
  color: #6c6c6c;
`
const Highlight = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 13px;
    text-align: center;
    background-color: #ffdb49;
    transition: all 0.2s ease-in-out;
  }
`
const ListTeam = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
`
class Team extends Component {
  state = {
    team: ''
  }

  componentDidMount() {
    axios
      .get(this.props.url)
      .then(response => {
        this.setState({ team: response.data })
      })
      .catch(error => error)
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Link to="/">Tictail</Link>
          <NavItem to="/admin">Admin</NavItem>
        </Header>
        <Hero>
          <Title>
            Incredible <Highlight>Tictailers</Highlight> In Sthlm
          </Title>
          <SubTitle>
            At Tictail, we organize bi-annual Demo Weeks where we hack on creative projects. It’s a good way to get that
            side project going or validate an idea for a new feature. One of the ideas for the upcoming Demo Week is a
            new team directory with a great deal of *wow* factor. You’ll be building this new app and the CMS that
            powers it.
          </SubTitle>
        </Hero>
        <ListTeam>
          {!this.state.team ? 'Loading...' : this.state.team.map(member => <TictailTeam key={member.id} {...member} />)}
        </ListTeam>
      </Wrapper>
    )
  }
}

export default Team

import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import TictailTeam from './TictailTeam'
import Spinner from './Spinner'

const Wrapper = styled.div`
  min-height: 100%;
  height: 100px;
`
const Hero = styled.div`
  background: #ffdb49;
  position: relative;
  padding-top: 10px;
  padding-bottom: 50px;
`
const Title = styled.h1`
  font-size: 100px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 60px;
  padding-top: 30px;
`
const SubTitle = styled.h2`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-size: 23px;
  font-weight: 300;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.04em;
  opacity: 0.7;
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
    background-color: #fff;
    transition: all 0.2s ease-in-out;
  }
`
const ListTeam = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: initial;
  position: relative;
  list-style: none;
  margin: 0;
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
        <Hero>
          <Title>
            <Highlight>Makers</Highlight> gonna make
          </Title>
          <SubTitle>
            At Tictail, we organize bi-annual Demo Weeks where we hack on creative projects. It’s a good way to get that
            side project going or validate an idea for a new feature. One of the ideas for the upcoming Demo Week is a
            new team directory with a great deal of *wow* factor. You’ll be building this new app and the CMS that
            powers it.
          </SubTitle>
        </Hero>
        <ListTeam>
          {!this.state.team ? <Spinner /> : this.state.team.map(member => <TictailTeam key={member.id} {...member} />)}
        </ListTeam>
      </Wrapper>
    )
  }
}

export default Team

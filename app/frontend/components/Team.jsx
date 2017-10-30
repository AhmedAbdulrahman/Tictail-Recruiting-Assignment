import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Wrapper, Header, NavItem, Hero, Title, SubTitle, Highlight, ListTeam } from '../styles/AppStyle'

// Components
import TictailTeam from './TictailTeam'

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
          <Link to="/team">Tictail</Link>
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

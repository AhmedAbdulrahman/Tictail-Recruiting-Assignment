import React, { Component } from 'react'
import styled from 'styled-components'

// API
import { fetchTeam, endpointReuqest } from '../utils/api'

// Get Components
import TeamMemberList from './TeamMemberList'
import Form from './Form'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 1200px;
  margin: 0 auto;
`
const AddButton = styled.button`
  width: 10%;
  background-color: #fff;
  border: 2px solid #dce2ec;
  border-radius: 2px;
  font-size: 14px;
  color: #ffdb49;
  outline: none;
  padding: 10px;
  margin-bottom: 30px;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    border-color: #ddc76b;
    color: #000000;
  }
`
class Admin extends Component {
  state = {
    team: [],
    member: {},
    showForm: false,
    hasError: false
  }

  // Form Handlers
  // Add Button
  handleAdd = () => {
    this.setState(() => {
      return {
        member: {},
        showForm: true,
        hasError: true
      }
    })
  }
  // Cancel Button
  handleCancel = () => {
    this.setState(() => {
      return {
        showForm: false,
        member: {},
        hasError: false
      }
    })
  }
  // Adding New Member handler
  handleSubmit = () => {
    const isMember = !this.state.member.id
    const url = this.props.url + (isMember ? '' : '/' + this.state.member.id)
    const data = this.state.member

    endpointReuqest(url, data)
      .then(newMember => {
        if (isMember) {
          const team = this.state.team
          const newTeam = [member].concat(team)
          this.setState(() => {
            return {
              member: member
            }
          })
          console.log(newMember)
        }
        this.setState({ showForm: false, member: {}, hasError: false })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange = member => {
    this.setState(() => {
      return {
        member: member
      }
    })
  }
  //Handle Form Errors
  handleError = () => {
    this.setState({ hasFormError: true })
  }

  // Team Members (Edit, Delete) Handlers
  // Edit click handler
  handleMemberEdit = i => {
    const member = this.state.team[i]
    this.setState({
      member: member,
      showForm: true
    })
  }
  // Delete Click Handler
  handleDelete = (id, index) => {
    const url = `${this.props.url}/${id}`
    const team = this.state.team
    team.splice(index, 1)
    this.setState({ team: team })
    endpointReuqest('DELETE', url, {})
  }

  // Loads team members from API
  componentDidMount() {
    fetchTeam(this.props.url).then(response => {
      this.setState({ team: response })
      console.log(response)
    })
  }

  render() {
    const { member } = this.state
    return (
      <Wrapper>
        <h1>Tictail Team Manager</h1>
        <AddButton onClick={this.handleAdd}>Add Member</AddButton>
        {this.state.showForm ? (
          <Form
            member={member}
            handleCancel={this.handleCancel}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleError={this.handleError}
          />
        ) : null}
        <TeamMemberList
          team={this.state.team}
          handleEdit={this.handleMemberEdit}
          handleDelete={this.handleDeleteMember}
        />
      </Wrapper>
    )
  }
}

export default Admin

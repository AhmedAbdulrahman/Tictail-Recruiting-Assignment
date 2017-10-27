import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
  handleAdd = () => {
    this.setState(() => {
      return {
        member: {},
        showForm: true,
        hasError: true
      }
    })
  }

  handleCancel = () => {
    this.setState(() => {
      return {
        showForm: false,
        member: {},
        hasError: false
      }
    })
  }
  // Loads team members from API
  componentDidMount() {
    axios
      .get(this.props.url)
      .then(response => {
        this.setState({ team: response.data })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    const { member } = this.state
    return (
      <Wrapper>
        <h1>Tictail Team Manager</h1>
        <AddButton onClick={this.handleAdd}>Add Member</AddButton>
        {this.state.showForm ? <Form member={member} onCancel={this.handleCancel} /> : null}
        <TeamMemberList team={this.state.team} edit={this.handleEditMember} delete={this.handleDeleteMember} />
      </Wrapper>
    )
  }
}

export default Admin

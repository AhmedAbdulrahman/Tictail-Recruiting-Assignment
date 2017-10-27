import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Get Components
import TeamMemberList from './TeamMemberList'
import Form from './Form'
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
    return (
      <div className="wrapper">
        <h1>Tictail Team Manager</h1>
        <button className="button primary" onClick={this.handleAdd}>
          Add Member
        </button>
        {this.state.showForm ? <Form member={this.state.member} onCancel={this.handleCancel} /> : null}
        <TeamMemberList team={this.state.team} edit={this.handleEditMember} delete={this.handleDeleteMember} />
      </div>
    )
  }
}

export default Admin

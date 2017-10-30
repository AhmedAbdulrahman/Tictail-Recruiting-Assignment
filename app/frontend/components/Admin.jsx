import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// API
import { fetchTeam, endpointReuqest, deleteRequest } from '../utils/api'

// Get Components
import TeamMemberList from './TeamMemberList'
import Form from './Form'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
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
const AddButton = styled.button`
  width: 10%;
  background-color: #fefefe;
  border: 2px solid #dce2ec;
  border-radius: 2px;
  font-size: 14px;
  color: #1f1e1d;
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
    member: {
      first_name: '',
      last_name: '',
      title: '',
      team: '',
      color: '',
      image: '',
      location: ''
    },
    showForm: false,
    isSuccess: false,
    isUpdated: false
  }

  // Form Handlers
  // Add Button
  handleAdd = () => {
    this.setState({
      member: {
        first_name: '',
        last_name: '',
        title: '',
        team: '',
        color: '',
        image: '',
        location: ''
      },
      showForm: true
    })
  }
  // Cancel Button
  handleCancel = () => {
    this.setState(() => {
      return {
        showForm: false,
        member: {}
      }
    })
  }

  showForm = () => {
    this.setState({ showForm: true })
  }

  // Add New Member or Update existing one
  onSubmit = fields => {
    return
    // Get props
    const { url } = this.props
    //Get member if alreay exists?
    const isMember = !this.state.member.id
    //get the URL
    const strURL = `${url}${isMember ? '' : `/${this.state.member.id}`}`
    //Set request type
    const strType = isMember ? 'POST' : 'PUT'

    // We are readyyy!
    endpointReuqest(strType, strURL, fields)
      .then(response => {
        if (isMember) {
          this.setState({
            team: [response.data, ...this.state.team],
            isSuccess: true,
            showForm: false
          })
        } else {
          this.setState({
            isUpdated: true
          })
        }
      })
      .catch(error => {
        console.log('ERROR', error)
      })
  }

  onChange = updatedValue => {
    this.setState({
      member: {
        ...this.state.member,
        ...updatedValue
      }
    })
  }

  // Edit click handler
  onEdit = index => {
    const member = this.state.team[index]
    this.setState({ member: member || {} })
    this.showForm()
  }

  // Delete Member
  onDelete = id => {
    const url = `${this.props.url}/${id}`
    const team = this.state.team
    //Find member if get match
    const member = team.find(member => {
      return member.id === id
    })

    //Remove is from the team
    team.splice(member, 1)

    deleteRequest(url)
      .then(response => {
        this.setState({
          team: team.filter(member => member.id !== id)
        })
      })
      .catch(error => console.log('ERROR', error))
  }

  // Loads team members from API
  componentDidMount() {
    fetchTeam(this.props.url).then(response => {
      this.setState({ team: response })
    })
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Link to="/team">Tictail</Link>
        </Header>
        <AddButton onClick={this.handleAdd}>Add Member</AddButton>
        {this.state.showForm ? (
          <Form
            member={this.state.member}
            handleCancel={this.handleCancel}
            onSubmit={fields => this.onSubmit(fields)}
            onChange={fields => this.onChange(fields)}
            handleError={this.handleError}
            isSuccess={this.state.isSuccess}
            isUpdated={this.state.isUpdated}
          />
        ) : null}
        <TeamMemberList
          team={this.state.team}
          onEdit={this.onEdit}
          onDelete={(id, index) => this.onDelete(id, index)}
        />
      </Wrapper>
    )
  }
}

export default Admin

import React, { Component } from 'react'
import placeholder from '../../backend/templates/img/placeholder.png'
import { Tr, ButtonEdit } from '../styles/AppStyle'

class TeamMember extends Component {
  editMember = () => {
    this.props.onEdit(this.props.index)
    return
  }
  deleteMember = () => {
    this.props.onDelete(this.props.id)
    return
  }
  render() {
    return (
      <Tr key={this.props.id}>
        <td>{this.props.member.first_name || 'N/A'}</td>
        <td>{this.props.member.last_name || 'N/A'}</td>
        <td colSpan="2">{this.props.member.title || 'N/A'}</td>
        <td>{this.props.member.team || 'N/A'}</td>
        <td>
          <ButtonEdit onClick={this.editMember}>Edit</ButtonEdit>
          <ButtonEdit onClick={this.deleteMember}>Delete</ButtonEdit>
        </td>
      </Tr>
    )
  }
}

export default TeamMember

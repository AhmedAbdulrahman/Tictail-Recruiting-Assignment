import React, { Component } from 'react'
import { Table, Th, Thead, Tbody } from '../styles/AppStyle'

//Components
import TeamMember from './TeamMember'

class TeamMemberList extends Component {
  editMember = index => {
    this.props.onEdit(index)
    return
  }
  deleteMember = id => {
    this.props.onDelete(id)
    return
  }

  render() {
    const rows = this.props.team.map(function(member, index) {
      return (
        <TeamMember
          id={member.id}
          key={member.id}
          onEdit={index => this.editMember(index)}
          onDelete={id => this.deleteMember(member.id)}
          index={index}
          member={member}
        />
      )
    }, this)
    return (
      <Table>
        <Thead>
          <tr>
            <Th>Name</Th>
            <Th>Surname</Th>
            <Th colSpan="2">Title</Th>
            <Th>Team</Th>
            <Th>Action</Th>
          </tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    )
  }
}

export default TeamMemberList

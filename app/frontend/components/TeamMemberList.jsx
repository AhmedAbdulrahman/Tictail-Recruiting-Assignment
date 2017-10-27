import React, { Component } from 'react'
import styled from 'styled-components'
import TeamMember from './TeamMember'

const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`
const Thead = styled.thead`border-bottom: 2px solid #dddddd;`
const Tbody = styled.tbody`
	&:tr:nth-child(odd) {
		background-color: #f9f9f9;
`
const Th = styled.th`
  border: 1px solid #dddddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

class TeamMemberList extends Component {
  handelEditMember() {}

  render() {
    const allMembers = this.props.team.map(function(member) {
      return <TeamMember key={member.id} {...member} />
    })

    return (
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Surname</Th>
            <Th>Title</Th>
            <Th>Team</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <Tbody>{allMembers}</Tbody>
      </Table>
    )
  }
}

export default TeamMemberList

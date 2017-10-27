import React, { Component } from 'react'
import styled from 'styled-components'
import TeamMember from './TeamMember'

const Table = styled.table`
  border-spacing: 0 10px;
  table-layout: fixed;
  width: 100%;
`
const Thead = styled.thead`
  border: 0;
  outline: 0;
  background-color: transparent;
`
const Tbody = styled.tbody`
	& tr {
		background-color: #fff;
		box-shadow: 0 8px 20px 0px rgba(131, 153, 163, 0.25);
`
const Th = styled.th`
  padding: 10px;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: #8399a3;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
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
            <Th colSpan="2">Title</Th>
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

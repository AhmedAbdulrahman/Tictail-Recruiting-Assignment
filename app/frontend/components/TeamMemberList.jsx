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
const Tr = styled.tr`
  td {
    padding: 15px;
    text-align: center;
  }
  td:first-child {
    border-radius: 2px 0 0 2px;
  }
  td:last-child {
    border-radius: 0 2px 2px 0;
    overflow: visible;
    white-space: normal;
  }
`
const Td = styled.td`
  text-align: center;
  border: 1px solid #dddddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const ButtonEdit = styled.button`
  width: 40%;
  background-color: #ffe57c;
  font-size: 14px;
  color: #3d4041;
  border: 0;
  border-radius: 2px;
  outline: none;
  padding: 10px;
  margin-right: 10px;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #ffdb49;
    border-color: #cccccc;
    color: #000000;
  }
`
class TeamMemberList extends Component {
  editMember = index => {
    console.log(index)
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
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Surname</Th>
            <Th colSpan="2">Title</Th>
            <Th>Team</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <Tbody>{rows}</Tbody>
      </Table>
    )
  }
}

export default TeamMemberList

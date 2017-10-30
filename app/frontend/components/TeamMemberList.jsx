import React, { Component } from 'react'
import styled from 'styled-components'
import TeamMember from './TeamMember'

const Table = styled.table`
  border-spacing: 0 10px;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  & tr {
    padding: 0.35em;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }
    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }
    table td:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    table td:last-child {
      border-bottom: 0;
    }
  }
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
    box-sizing: box-content;
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

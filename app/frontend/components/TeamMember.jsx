import React, { Component } from 'react'
import styled from 'styled-components'
import placeholder from '../../backend/templates/img/placeholder.png'

const Tr = styled.tr`
  &:hover {
    transform: translateY(-3px);
    transition: transform 2s east-in-out;
  }
  td {
    padding: 8px;
    line-height: 1.5;
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
  background-color: #ffe57c;
  font-size: 14px;
  color: #3d4041;
  border: 0;
  border-radius: 2px;
  outline: none;
  width: 27%;
  margin: 0 5px 5px;
  padding: 10px;
  box-sizing: content-box;
  overflow: hidden;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #ffdb49;
    border-color: #cccccc;
    color: #000000;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 27%;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 44%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
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

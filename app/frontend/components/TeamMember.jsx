import React, { Component } from 'react'
import styled from 'styled-components'
import placeholder from '../../backend/templates/img/placeholder.png'

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
class TeamMember extends Component {
  handleEdit = () => {
    this.props.handleEdit(this.props.index)
    return
  }
  handleDelete = () => {
    this.props.handleDelete(this.props.id, this.props.index)
    return
  }
  render() {
    return (
      <Tr>
        <td>{this.props.first_name || 'N/A'}</td>
        <td>{this.props.last_name || 'N/A'}</td>
        <td colSpan="2">{this.props.title || 'N/A'}</td>
        <td>{this.props.team || 'N/A'}</td>
        <td>
          <ButtonEdit onClick={this.handleEdit}>Edit</ButtonEdit>
          <ButtonEdit onClick={this.handleDelete}>Delete</ButtonEdit>
        </td>
      </Tr>
    )
  }
}

export default TeamMember

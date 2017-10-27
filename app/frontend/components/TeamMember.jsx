import React, { Component } from 'react'
import styled from 'styled-components'

const Tr = styled.tr`
  td:last-child {
    overflow: visible;
    white-space: normal;
  }
`
const Td = styled.td`
  border: 1px solid #dddddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ButtonEdit = styled.button`
  font-size: 14px;
  line-height: 30px;
  color: #000;
  background-color: #ffdb49;
  border: 1px solid #eeeeee;
  padding: 0 17px;
  margin-right: 10px;
  width: 30%;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.1s;
`
class TeamMember extends Component {
  render() {
    return (
      <Tr>
        <Td>{this.props.first_name || 'N/A'}</Td>
        <Td>{this.props.last_name || 'N/A'}</Td>
        <Td>{this.props.title || 'N/A'}</Td>
        <Td>{this.props.team || 'N/A'}</Td>
        <Td>
          <ButtonEdit>Edit</ButtonEdit>
          <ButtonEdit>Delete</ButtonEdit>
        </Td>
      </Tr>
    )
  }
}

export default TeamMember

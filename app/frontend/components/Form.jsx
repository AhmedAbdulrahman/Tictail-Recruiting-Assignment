import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  & * {
    box-sizing: border-box;
  }
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 0;
  padding: 10px 0;
`
const Input = styled.input.attrs({
  type: 'text'
})`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-width: 2px;
  outline: 0;
  width: 100%;
  min-height: 40px;
  height: auto;
  padding: 0 20px;
  margin: 0 10px 13px 0;
  font-size: 12px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  &:focus {
    border: 1px solid rgba(255, 229, 124, 0.79);
    border-width: 2px;
    box-shadow: inset 0 1px 1px rgba(255, 229, 124, 0.79);
  }
`

const FormGroup = styled.div`
  margin-bottom: 0;
  margin-right: 10px;
  padding: 10px 0;
  width: 20%;
`

const Label = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`
const SubmitButton = styled.input.attrs({
  type: 'submit'
})`
  width: 45%;
  background-color: #ffeea8;
  border: 2px solid #ffdb49;
  border-radius: 2px;
  font-size: 14px;
  color: #232728;
  text-transform: uppercase;
  outline: none;
  padding: 10px;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    border-color: #ddc76b;
    color: #000000;
  }
`

const CancelButton = styled.button`
  width: 45%;
  background-color: #ffdb49;
  border: 2px solid #f4d34d;
  border-radius: 2px;
  font-size: 14px;
  color: #232728;
  text-transform: uppercase;
  outline: none;
  padding: 10px;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    border-color: #ddc76b;
    color: #000000;
  }
`

class componentName extends Component {
  //Input Change handler
  handleChange = e => {
    const member = this.props.member
    member[e.target.id] = e.target.value.trim()
    console.log(member)
    this.props.handleChange(member)
    return
  }

  //Form Submit Handler
  handleFormSubmit = e => {
    e.preventDefault()
    if (
      !this.props.member.first_name ||
      !this.props.member.last_name ||
      !this.props.member.team ||
      !this.props.member.color ||
      !this.props.member.image ||
      !this.props.member.location
    ) {
      this.props.handleError()
      return
    }
    this.props.handleSubmit()
    return
  }
  // Form Cancel Handler
  handleCancel = e => {
    e.preventDefault()
    this.props.handleCancel()
    return
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label htmlFor="first_name">First Name</Label>
            <Input id="first_name" type="text" placeholder="First Name" onChange={this.handleChange} autoFocus />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="text" placeholder="Last Name" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input id="title" type="text" placeholder="Title" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="team">Team</Label>
            <Input id="team" type="text" placeholder="Team" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <Input id="color" type="text" placeholder="Color" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="text" placeholder="Image" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Location">Location</Label>
            <Input id="location" type="text" placeholder="Location" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Input type="text" ref="id" hidden value={this.props.member.id} onChange={this.handleChange} />
            {this.props.hasError ? <p className="error">Please fill in all required fields (*).</p> : null}
            <ButtonWrapper>
              <SubmitButton type="submit" value="Submit" />
              <CancelButton onClick={this.handleCancel}>Cancel</CancelButton>
            </ButtonWrapper>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}

export default componentName

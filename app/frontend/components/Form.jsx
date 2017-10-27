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
  handleFormSubmit(e) {
    e.preventDefault()
    if (
      !this.props.member.first_name ||
      !this.props.member.last_name ||
      !this.props.member.team ||
      !this.props.member.color ||
      !this.props.member.image ||
      !this.props.member.location
    ) {
      this.props.onFormError()
      return
    }
    this.props.onMemberSubmit()
    return
  }

  handleCancel = e => {
    e.preventDefault()
    this.props.onCancel()
    return
  }
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              id="first_name"
              type="text"
              placeholder="First Name"
              value={this.props.member.first_name}
              onChange={this.handleChange}
              autoFocus
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="last_name"
              type="text"
              placeholder="Last Name"
              value={this.props.member.last_name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Title"
              value={this.props.member.title}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="team">Team</Label>
            <Input
              id="team"
              type="text"
              placeholder="Team"
              value={this.props.member.team}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              type="text"
              placeholder="Color"
              value={this.props.member.color}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="text"
              placeholder="Image"
              value={this.props.member.image}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="Location"
              value={this.props.member.location}
              onChange={this.handleChange}
            />
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

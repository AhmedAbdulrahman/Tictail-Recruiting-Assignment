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
const MemberForm = styled.form`
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
const Error = styled.p`
  color: #f81763;
  font-size: 14px;
  margin-top: 0;
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
class Form extends Component {
  // state = {
  //   first_name: '',
  //   last_name: '',
  //   title: '',
  //   team: '',
  //   color: '',
  //   image: '',
  //   location: ''
  // }

  //Input Change handler
  change = e => {
    const member = this.props.member
    member[e.target.name] = e.target.value.trim()
    this.props.onChange(member)
    // this.props.onChange({ [e.target.name]: e.target.value.trim() })
    // this.setState({
    //   [e.target.name]: e.target.value.trim()
    // })

    return
  }
  //Form Submit Handler
  onSubmit = e => {
    e.preventDefault()
    const { state } = this
    if (
      !state.first_name ||
      !state.last_name ||
      !state.team ||
      !state.title ||
      !state.color ||
      !state.image ||
      !state.location
    ) {
      this.props.handleError()
      return
    }
    this.props.onSubmit(this.state)
    //Clear Input Fields
    this.refs.MemberForm.reset()
  }
  // Form Cancel Handler
  handleCancel = e => {
    e.preventDefault()
    this.props.handleCancel()
    return
  }
  render() {
    const { member } = this.props
    return (
      <Container>
        <MemberForm ref="memberForm">
          <FormGroup>
            <Label htmlFor="first_name">First Name</Label>
            <Input name="first_name" type="text" value={member.first_name} onChange={e => this.change(e)} autoFocus />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last_name">Last Name</Label>
            <Input name="last_name" type="text" value={member.last_name} onChange={e => this.change(e)} />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input name="title" type="text" value={member.title} onChange={e => this.change(e)} />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="team">Team</Label>
            <Input name="team" type="text" value={member.team} onChange={e => this.change(e)} />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <Input name="color" type="text" value={member.color} onChange={e => this.change(e)} />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">Image</Label>
            <Input name="image" type="text" value={member.image} onChange={e => this.change(e)} />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Location">Location</Label>
            <Input name="location" type="text" value={member.location} onChange={e => this.change(e)} />
            {this.props.hasFormError ? <Error className="error">Field is required.</Error> : null}
          </FormGroup>
          <FormGroup>
            {/* <Input type="text" ref="id" hidden value={this.id} onChange={e => this.change(e)} /> */}
            <ButtonWrapper>
              <SubmitButton type="submit" value="Submit" onClick={e => this.onSubmit(e)} />
              <CancelButton onClick={this.handleCancel}>Cancel</CancelButton>
            </ButtonWrapper>
          </FormGroup>
        </MemberForm>
      </Container>
    )
  }
}

export default Form

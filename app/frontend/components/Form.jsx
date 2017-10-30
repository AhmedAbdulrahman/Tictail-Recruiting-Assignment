import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

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
  width: 100%;
  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 20%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 28%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
const Label = styled.label`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 100%;
  margin-bottom: 5px;
`
const Error = styled.p`
  color: #f81763;
  font-size: 13px;
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
  state = {
    firstNameError: '',
    lastNameError: '',
    titleError: '',
    teamError: '',
    colorError: '',
    imageError: '',
    locationError: ''
  }
  //Input Change handler
  change = e => {
    const member = this.props.member
    this.props.onChange({ [e.target.name]: e.target.value })
    return
  }

  //Validation
  validate = () => {
    const { member } = this.props
    const errors = {
      firstNameError: '',
      lastNameError: '',
      titleError: '',
      teamError: '',
      colorError: '',
      imageError: '',
      locationError: ''
    }
    let isError = false

    //Validate First Name
    if (member.first_name.length < 5) {
      isError = true
      errors.firstNameError = 'Fields is required and needs to be at least 5 characters long!'
    }
    if (member.last_name.length < 5) {
      isError = true
      errors.lastNameError = 'Fields is required and needs to be at least 5 characters long!'
    }
    if (member.title.length < 5) {
      isError = true
      errors.titleError = 'Fields is required and needs to be at least 5 characters long!'
    }
    if (member.team.length < 5) {
      isError = true
      errors.teamError = 'Fields is required and needs to be at least 5 characters long!'
    }
    // Validate Color Code
    if (/^[0-9A-F]{6}$/i.test(member.color) == false) {
      isError = true
      errors.colorError = 'Color code format #c1c1c1!'
    }

    // Validate IMAGE URL
    if (!/^(f|ht)tps?:\/\//i.test(member.image)) {
      isError = true
      errors.imageError = 'Field is required and must be valid URL format'
    }

    //Validate Location
    if (!moment.tz.zone(member.location)) {
      isError = true
      errors.locationError = 'Field is required and must be in Timezone format'
    }

    // Clear error message
    this.setState({
      ...errors
    })

    return isError
  }
  //Form Submit Handler
  onSubmit = e => {
    e.preventDefault()
    const { member } = this.props
    const err = this.validate()
    if (!err) {
      this.setState({
        firstNameError: '',
        lastNameError: '',
        titleError: '',
        teamError: '',
        colorError: '',
        imageError: '',
        locationError: ''
      })
      this.props.onSubmit(member)
    }
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
        <MemberForm>
          {this.props.isSuccess ? <Error className="error">Member added successfully.</Error> : null}
          {this.props.isUpdated ? <Error className="error">Member updated successfully.</Error> : null}
          <FormGroup>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              name="first_name"
              type="text"
              value={member.first_name}
              onChange={e => this.change(e)}
              placeholder="(ex: Johan)"
              autoFocus
            />
            <Error className="error">{this.state.firstNameError}</Error>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              name="last_name"
              type="text"
              value={member.last_name}
              onChange={e => this.change(e)}
              placeholder="(ex: Ericsson)"
            />
            <Error className="error">{this.state.lastNameError}</Error>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              type="text"
              value={member.title}
              onChange={e => this.change(e)}
              placeholder="(ex: Manager)"
            />
            <Error className="error">{this.state.titleError}</Error>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="team">Team</Label>
            <Input
              name="team"
              type="text"
              value={member.team}
              onChange={e => this.change(e)}
              placeholder="(ex: Engineering)"
            />
            <Error className="error">{this.state.teamError}</Error>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color">Color</Label>
            <Input
              name="color"
              type="text"
              value={member.color}
              onChange={e => this.change(e)}
              placeholder="(ex: 'C1C1C1')"
            />
            <Error className="error">{this.state.colorError}</Error>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">Image</Label>
            <Input
              name="image"
              type="text"
              value={member.image}
              onChange={e => this.change(e)}
              placeholder="(ex: URL)"
            />
            <Error className="error">{this.state.imageError}</Error>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Location">Location</Label>
            <Input
              name="location"
              type="text"
              value={member.location}
              onChange={e => this.change(e)}
              placeholder="(ex: America/Los_Angeles)"
            />
            <Error className="error">{this.state.locationError}</Error>
          </FormGroup>
          <FormGroup>
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

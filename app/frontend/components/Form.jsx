import React, { Component } from 'react'
import moment from 'moment-timezone'
import {
  Container,
  MemberForm,
  FormGroup,
  Error,
  Label,
  Input,
  ButtonWrapper,
  SubmitButton,
  CancelButton
} from '../styles/AppStyle'

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
      errors.firstNameError = 'Name is required and needs to be at least 5 characters long!'
    }
    if (member.last_name.length < 5) {
      isError = true
      errors.lastNameError = 'Last Name is required and needs to be at least 5 characters long!'
    }
    if (member.title.length < 5) {
      isError = true
      errors.titleError = 'Title is required and needs to be at least 5 characters long!'
    }
    if (member.team.length < 5) {
      isError = true
      errors.teamError = 'Team is required and needs to be at least 5 characters long!'
    }
    // Validate Color Code
    if (/^[0-9A-F]{6}$/i.test(member.color) == false) {
      isError = true
      errors.colorError = 'Color is required and must be valid code format'
    }

    // Validate IMAGE URL
    if (!/^(f|ht)tps?:\/\//i.test(member.image)) {
      isError = true
      errors.imageError = 'Image is required and must be valid URL format'
    }

    //Validate Location
    if (!moment.tz.zone(member.location)) {
      isError = true
      errors.locationError = 'Location is required and must be in Timezone format'
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

import React, { Component } from 'react'

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
      <form className="team-form">
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          type="text"
          placeholder="First Name"
          value={this.props.member.first_name}
          onChange={this.handleChange}
          autoFocus
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          type="text"
          placeholder="Last Name"
          value={this.props.member.last_name}
          onChange={this.handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={this.props.member.title}
          onChange={this.handleChange}
        />

        <label htmlFor="team">Team</label>
        <input id="team" type="text" placeholder="Team" value={this.props.member.team} onChange={this.handleChange} />

        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          placeholder="Color"
          value={this.props.member.color}
          onChange={this.handleChange}
        />

        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          placeholder="Image"
          value={this.props.member.image}
          onChange={this.handleChange}
        />

        <label htmlFor="Location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={this.props.member.location}
          onChange={this.handleChange}
        />

        <input type="text" ref="id" hidden value={this.props.member.id} onChange={this.handleChange} />
        {this.props.hasError ? <p className="error">Please fill in all required fields (*).</p> : null}
        <div>
          <input className="submit primary button" type="submit" value="Submit" />
          <button className="cancel button" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}

export default componentName

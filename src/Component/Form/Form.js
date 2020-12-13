import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: 'Иван',
    phone: '+380951697398',
  };

  handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

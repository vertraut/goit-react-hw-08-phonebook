import React, { Component } from 'react';

import s from './Form.module.css';
export default class Form extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.Form}>
        <label className={s.Label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            className={s.Input}
          />
        </label>
        <label className={s.Label}>
          Phone number
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
            className={s.Input}
          />
        </label>
        <button type="submit" className={s.buttonSubmit}>
          Add Contact
        </button>
      </form>
    );
  }
}

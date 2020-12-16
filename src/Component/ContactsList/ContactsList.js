import React, { Component } from 'react';

import FilterField from '../FilterField';

import s from './ContactsList.module.css';

export default class ContactsList extends Component {
  state = { filter: '' };

  updateState = filterValue => {
    this.setState({ filter: filterValue.toLowerCase() });
  };

  filteredList = () => {
    const contacts = this.props.contacts;
    if (contacts < 0) return <p>Contact list is empty</p>;
    return contacts.filter(({ name }) => {
      const nameNormalized = name.toLowerCase();
      return nameNormalized.includes(this.state.filter);
    });
  };

  deleteContact = ({ currentTarget }) => {
    const contacts = this.props.contacts;

    this.props.stateContactsUpdate(
      contacts.filter(contact => contact.id !== currentTarget.id),
    );
  };

  render() {
    if (this.props.contacts.length <= 0) return <p>Contact list is empty</p>;
    const contacts = this.filteredList();
    return (
      <div>
        {this.props.contacts.length > 1 && (
          <div>
            <p>Find contact by name</p>
            <FilterField updateState={this.updateState} />
          </div>
        )}

        <ul>
          {contacts.map(({ id, name, phone }) => (
            <li key={id} className={s.Item}>
              {name}: {phone}
              <button id={id} onClick={this.deleteContact} className={s.Button}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

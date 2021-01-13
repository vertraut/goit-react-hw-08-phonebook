import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';

import s from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) this.setState({ contacts: localContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      console.log('Добавили или удалили контакт');
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  stateContactsUpdate = newContacts => {
    this.setState({ contacts: newContacts });
  };

  addContact = ({ name, phone }) => {
    const nameNormalized = name.toLowerCase();
    this.setState(({ contacts }) => {
      const dublicateContactByName = contacts.find(
        contact => contact.name.toLowerCase() === nameNormalized,
      );
      if (dublicateContactByName) {
        alert(`${dublicateContactByName.name} is already in contacts.`);
        return;
      }
      if (true)
        return {
          contacts: [
            ...contacts,
            {
              name: name,
              phone: phone,
              id: uuidv4(),
            },
          ],
        };
    });
  };

  render() {
    return (
      <div className={s.Phonebook}>
        <Section title={'Phonebook'}>
          <Form addContact={this.addContact} />
          <Section title={'Contacts'}>
            <ContactsList
              contacts={this.state.contacts}
              stateContactsUpdate={this.stateContactsUpdate}
            />
          </Section>
        </Section>
      </div>
    );
  }
}

export default Phonebook;

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';

class Phonebook extends Component {
  state = { contacts: [], name: '' };

  // testContacts = [
  //   {
  //     name: 'Cat',
  //     phone: '01',
  //     id: 'id-1',
  //   },
  //   {
  //     name: 'Dog',
  //     phone: '02',
  //     id: 'id-2',
  //   },
  //   {
  //     name: 'Fox',
  //     phone: '03',
  //     id: 'id-3',
  //   },
  // ];

  addContact = ({ name, phone }) => {
    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        {
          name: name,
          phone: phone,
          id: uuidv4(),
        },
      ],
    }));
  };

  render() {
    return (
      <div>
        <Section title={'Phonebook'}>
          <Form addContact={this.addContact} />
          <Section title={'Contacts'}>
            <ContactsList contacts={this.state.contacts} />
          </Section>
        </Section>
      </div>
    );
  }
}

export default Phonebook;

import React, { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';

class Phonebook extends Component {
  state = { contacts: [], name: '' };

  testContacts = [
    {
      name: 'Cat',
      phone: '01',
    },
    {
      name: 'Dog',
      phone: '02',
    },
    {
      name: 'Fox',
      phone: '03',
    },
  ];

  render() {
    return (
      <div>
        <Section title={'Phonebook'}>
          <Form />
          <Section title={'Contacts'}>
            <ContactsList contacts={this.testContacts} />
          </Section>
        </Section>
      </div>
    );
  }
}

export default Phonebook;

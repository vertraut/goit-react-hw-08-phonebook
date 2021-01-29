import { connect } from 'react-redux';

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';
import * as actions from '../../redux/contacts/contacts-actions';

import s from './Phonebook.module.css';

function Phonebook({ items, addContact }) {
  const checkContact = contact => {
    const nameNormalized = contact.name.toLowerCase();

    const dublicateContactByName = items.find(
      contact => contact.name.toLowerCase() === nameNormalized,
    );
    if (dublicateContactByName) {
      alert(`${dublicateContactByName.name} is already in contacts.`);
      return false; //возвращаем false в форму, чтобы там не очищались поля
    }
    addContact(contact);
    return true; //все хорошо, поля формы можно очистить
  };

  return (
    <div className={s.Phonebook}>
      <Section title={'Phonebook'}>
        <Form addContact={checkContact} />
        <Section title={'Contacts'}>
          <ContactsList />
        </Section>
      </Section>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: item => dispatch(actions.addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

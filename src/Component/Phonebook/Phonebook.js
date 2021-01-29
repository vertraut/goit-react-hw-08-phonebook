import { connect } from 'react-redux';

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';
import * as actions from '../../redux/actions';

import s from './Phonebook.module.css';

function Phonebook({ contacts, addContact, deleteContact }) {
  const checkContact = contact => {
    const nameNormalized = contact.name.toLowerCase();

    const dublicateContactByName = contacts.find(
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
          <ContactsList contacts={contacts} deleteContact={deleteContact} />
        </Section>
      </Section>
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: item => dispatch(actions.addContact(item)),
  deleteContact: item => dispatch(actions.deleteContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

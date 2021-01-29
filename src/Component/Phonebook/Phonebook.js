import { connect } from 'react-redux';

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';
import * as actions from '../../redux/actions';

import s from './Phonebook.module.css';

function Phonebook({ contacts, addContact, deleteContact }) {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  // const addContact = (name, phone) => {
  //   const nameNormalized = name.toLowerCase();

  //   const dublicateContactByName = contacts.find(
  //     contact => contact.name.toLowerCase() === nameNormalized,
  //   );
  //   if (dublicateContactByName) {
  //     alert(`${dublicateContactByName.name} is already in contacts.`);
  //     return;
  //   }

  //   setContacts(prevState => [
  //     ...prevState,
  //     {
  //       name: name,
  //       phone: phone,
  //       id: uuidv4(),
  //     },
  //   ]);
  // };

  // const deleteContact = ({ currentTarget }) => {
  //   setContacts(contacts.filter(contact => contact.id !== currentTarget.id));
  //   console.log('удален');
  // };

  return (
    <div className={s.Phonebook}>
      <Section title={'Phonebook'}>
        <Form addContact={addContact} />
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

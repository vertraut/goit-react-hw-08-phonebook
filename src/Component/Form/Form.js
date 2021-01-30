import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import { v4 as uuidv4 } from 'uuid';

import s from './Form.module.css';

function Form({ addContact, items }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetState = () => {
    setName('');
    setPhone('');
  };

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkContact({
      id: uuidv4(),
      name: name.trim(),
      phone: phone.trim(),
    });
  };

  const checkContact = contact => {
    const nameNormalized = contact.name.toLowerCase();

    const dublicateContactByName = items.find(
      contact => contact.name.toLowerCase() === nameNormalized,
    );
    if (dublicateContactByName) {
      alert(`${dublicateContactByName.name} is already in contacts.`);
      return;
    }
    addContact(contact);
    resetState();
  };

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label className={s.Label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={s.Input}
        />
      </label>
      <label className={s.Label}>
        Phone number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          className={s.Input}
        />
      </label>
      <button type="submit" className={s.buttonSubmit}>
        Add Contact
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: item => dispatch(addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

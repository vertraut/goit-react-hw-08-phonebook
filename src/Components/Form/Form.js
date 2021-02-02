import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';

import s from './Form.module.css';

function Form({ addContact, items }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkContact({
      name: name.trim(),
      number: number.trim(),
    });
  };

  const checkContact = contact => {
    const { name, number } = contact;
    if (name === '' || number === '') {
      alert('Please fill in the form!');
      return;
    }
    const nameNormalized = name.toLowerCase();

    const dublicateContactByName = items.find(
      ({ name }) => name.toLowerCase() === nameNormalized,
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
          name="number"
          value={number}
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

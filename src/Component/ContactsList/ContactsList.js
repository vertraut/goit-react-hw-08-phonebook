import { useState } from 'react';

import FilterField from '../FilterField';

import s from './ContactsList.module.css';

export default function ContactsList({ contacts, stateContactsUpdate }) {
  const [filter, setFilter] = useState('');

  const updateState = filterValue => {
    setFilter(filterValue.toLowerCase().trim());
  };

  const filteredList = () => {
    const filtered = contacts.filter(({ name }) => {
      const nameNormalized = name.toLowerCase();

      return nameNormalized.includes(filter);
    });

    return filtered.length > 0 ? filtered : false;
  };

  const deleteContact = ({ currentTarget }) => {
    stateContactsUpdate(
      contacts.filter(contact => contact.id !== currentTarget.id),
    );
  };

  const filteredContactsShow = filteredContacts => {
    return filteredContacts.map(({ id, name, phone }) => (
      <li key={id} className={s.Item}>
        {name}: {phone}
        <button id={id} onClick={deleteContact} className={s.Button}>
          Delete
        </button>
      </li>
    ));
  };
  if (contacts.length <= 0) return <p>Contact list is empty</p>;
  const filteredContacts = filteredList();
  return (
    <div>
      {contacts.length > 1 && (
        <div>
          <p>Find contact by name</p>
          <FilterField updateState={updateState} />
        </div>
      )}

      <ul>
        {filteredContacts ? (
          filteredContactsShow(filteredContacts)
        ) : (
          <p>По вашему запросу ничего не найдено!</p>
        )}
      </ul>
    </div>
  );
}

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterField from '../FilterField';
import {
  getItems,
  getLoading,
  getError,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import * as contactsOperations from 'redux/contacts/contacts-operations';
import s from './ContactsList.module.css';

function ContactsList() {
  const items = useSelector(getItems);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const filtered = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContact = e =>
    dispatch(contactsOperations.deleteContact(e.target.id));

  const filteredList = () => {
    if (items.length === 0) return; //если нет контактов, выходим

    return filtered.length > 0 ? filtered : false;
  };

  if (error) {
    alert(error);
  }

  const filteredContactsShow = filteredContacts => {
    return filteredContacts.map(({ id, name, number }) => (
      <li key={id} className={s.Item}>
        {name}: {number}
        <button id={id} onClick={deleteContact} className={s.Button}>
          Delete
        </button>
      </li>
    ));
  };

  if (loading) {
    return <div>Секунду...</div>;
  }

  if (items.length <= 0) return <p>Contact list is empty</p>;
  const filteredContacts = filteredList();

  return (
    <div>
      {items.length > 0 && (
        <div>
          <p>Find contact by name</p>
          <FilterField />
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

export default ContactsList;

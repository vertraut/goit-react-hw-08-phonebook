import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import FilterField from '../FilterField';
import {
  getItems,
  getFilterValue,
} from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import s from './ContactsList.module.css';

function ContactsList() {
  const items = useSelector(getItems);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContact = e => dispatch(actions.deleteContact(e.target.id));

  const filteredList = () => {
    if (items.length === 0) return; //если нет контактов, выходим

    const filtered = items.filter(({ name }) => {
      const nameNormalized = name.toLowerCase();

      return nameNormalized.includes(filter.trim());
    });

    return filtered.length > 0 ? filtered : false;
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

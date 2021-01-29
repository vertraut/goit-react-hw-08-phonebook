import * as actions from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

import FilterField from '../FilterField';

import s from './ContactsList.module.css';

function ContactsList({ items, filter, deleteContact, updateFilter }) {
  const filteredList = () => {
    if (items.length === 0) return; //если нет контактов, выходим

    const filtered = items.filter(({ name }) => {
      const nameNormalized = name.toLowerCase();

      return nameNormalized.includes(filter);
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
          <FilterField updateFilter={updateFilter} />
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

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: value => dispatch(actions.updateFilter(value)),
  deleteContact: value => dispatch(actions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

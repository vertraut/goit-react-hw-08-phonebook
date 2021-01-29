import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

import FilterField from '../FilterField';

import s from './ContactsList.module.css';

function ContactsList({ contacts, deleteContact, filter, updateFilter }) {
  //onst [filter, setFilter] = useState('');

  // const updateState = filterValue => {
  //   setFilter(filterValue.toLowerCase().trim());
  // };

  const filteredList = () => {
    const filtered = contacts.filter(({ name }) => {
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
  if (contacts.length <= 0) return <p>Contact list is empty</p>;
  const filteredContacts = filteredList();
  return (
    <div>
      {contacts.length > 1 && (
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

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: value => dispatch(actions.filterContact(value)),
  deleteContact: value => dispatch(actions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

import * as contactsActions from './contacts-actions';
import * as contactShelfAPI from 'services/contactshelf-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactShelfAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  try {
    const data = await contactShelfAPI.addContacts(contact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    await contactShelfAPI.deleteContact(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

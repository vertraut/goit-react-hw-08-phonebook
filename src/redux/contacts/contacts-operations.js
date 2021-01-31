import * as contactsActions from './contacts-actions';
import * as contactShelfAPI from '../../services/contactshelf-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactShelfAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

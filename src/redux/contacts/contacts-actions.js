import { createAction } from '@reduxjs/toolkit';

//add
export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

//delete
export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError');

//fetch
export const fetchContactsRequest = createAction(
  'phonebook/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'phonebook/fetchContactsSuccess',
);
export const fetchContactsError = createAction('phonebook/fetchContactsError');

//filter
export const updateFilter = createAction('phonebook/updateFilter');

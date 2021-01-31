import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact');

export const deleteContact = createAction('phonebook/deleteContact');

export const updateFilter = createAction('phonebook/updateFilter');

//pending
export const fetchContactsRequest = createAction(
  'phonebook/fetchContactsRequest',
);

//fulfilled
export const fetchContactsSuccess = createAction(
  'phonebook/fetchContactsSuccess',
);

//rejected
export const fetchContactsError = createAction('phonebook/fetchContactsError');

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => {
      //приводим id к строке, т.к.e.target.id возвращает нам строку
      return id.toString() !== payload;
    }),
});

const isLoadingReducer = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => payload,
  [contactsActions.fetchContactsRequest]: () => null,

  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.addContactRequest]: () => null,

  [contactsActions.deleteContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactRequest]: () => null,
});

const filterReducer = createReducer('', {
  [contactsActions.updateFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContact]: (state, action) => [...state, action.payload],
  [contactsActions.deleteContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const isLoadingReducer = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const filterReducer = createReducer('', {
  [contactsActions.updateFilter]: (_, action) => action.payload,
});

const errorReducer = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;

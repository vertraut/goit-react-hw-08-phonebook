import { combineReducers } from 'redux';

import actions from './contacts-actions-types';

const contactsInitialState = [
  {
    name: 'Вадим',
    phone: 'phone',
    id: '1',
  },
  {
    name: 'Kolya',
    phone: 'telephone',
    id: '2',
  },
  {
    name: 'Vasya',
    phone: 'netu',
    id: '3',
  },
];

const itemsReducer = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_CONTACT:
      return [...state, payload];
    case actions.DELETE_CONTACT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actions.UPDATE_FILTER:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

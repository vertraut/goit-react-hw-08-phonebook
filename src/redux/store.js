import { createStore } from 'redux';
import actions from './actionsTypes';

const initialState = {
  contacts: [
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
  ],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_CONTACT:
      console.log(payload);
      return { ...state, contacts: [...state.contacts, payload] };
    case actions.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

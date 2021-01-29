import actions from './actionsTypes';

export const addContact = value => ({
  type: actions.ADD_CONTACT,
  payload: value,
});

export const deleteContact = value => ({
  type: actions.DELETE_CONTACT,
  payload: value.target.id,
});

export const filterContact = value => ({
  type: actions.UPDATE_FILTER,
  payload: value,
});

import actions from './contacts-actions-types';

export const addContact = value => ({
  type: actions.ADD_CONTACT,
  payload: value,
});

export const deleteContact = id => ({
  type: actions.DELETE_CONTACT,
  payload: id,
});

export const updateFilter = value => ({
  type: actions.UPDATE_FILTER,
  payload: value,
});

import actions from './contacts-actions-types';

export const addContact = value => ({
  type: actions.ADD_CONTACT,
  payload: value,
});

export const deleteContact = value => ({
  type: actions.DELETE_CONTACT,
  payload: value.target.id,
});

export const updateFilter = value => ({
  type: actions.UPDATE_FILTER,
  payload: value,
});

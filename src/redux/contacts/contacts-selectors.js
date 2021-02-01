import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getItems, getFilterValue],

  (items, filter) => {
    return items.filter(({ name }) => {
      const nameNormalized = name.toLowerCase();
      return nameNormalized.includes(filter.trim());
    });
  },
);

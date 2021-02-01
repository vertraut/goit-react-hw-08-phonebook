import * as contactShelfAPI from 'services/contactshelf-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    const contacts = await contactShelfAPI.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async contact => {
    const data = await contactShelfAPI.addContacts(contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    await contactShelfAPI.deleteContact(id);
    return id;
  },
);

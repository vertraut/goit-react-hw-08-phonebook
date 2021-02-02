import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async contact => {
    console.log(contact);
    const { data } = await axios.post('/contacts', contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);

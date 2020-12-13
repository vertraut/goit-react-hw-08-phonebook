import React from 'react';

const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, phone }) => (
      <li>
        {name}: {phone}
      </li>
    ))}
  </ul>
);
export default ContactsList;

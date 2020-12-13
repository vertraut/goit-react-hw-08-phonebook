import React from 'react';

const ContactsList = ({ contacts }) => {
  if (contacts.length > 0) {
    return (
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
          </li>
        ))}
      </ul>
    );
  } else return <p>Contact list is empty</p>;
};

export default ContactsList;

import Section from '../Section';
import Form from '../Form';
import ContactsList from '../ContactsList';

import s from './Phonebook.module.css';

function Phonebook() {
  return (
    <div className={s.Phonebook}>
      <Section title={'Phonebook'}>
        <Form />
        <Section title={'Contacts'}>
          <ContactsList />
        </Section>
      </Section>
    </div>
  );
}

export default Phonebook;

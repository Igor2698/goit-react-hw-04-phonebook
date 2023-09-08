import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';

const getIntialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return JSON.parse(savedContacts) ?? [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getIntialContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    console.log(name);
    const nameInLowerCase = name.toLowerCase();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === nameInLowerCase
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <Section title="Phonebook">
        <Form onSubmit={addContact} />
      </Section>
      <Section>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          filtered={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
        {getVisibleContacts().length === 0 && contacts.length > 0 && (
          <p className={css.warningText}>No one found with that name</p>
        )}
        {contacts.length === 0 && (
          <p className={css.warningText}>
            Please add contact by click on "Add conctact" button
          </p>
        )}
      </Section>
    </div>
  );
};

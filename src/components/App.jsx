import css from './App.module.css';
import { useEffect, useState } from 'react';
import { HeadText } from './head-text/HeadText';
import { ContactsList } from './contacts-list/ContactsList';
import { PhonebookForm } from './phonebook-form/PhonebookForm';
import { LabelInput } from './label-input/LabelInput';
import { NoContactsMessage } from './noContactsMessage/noContactsMessage';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from './../services/localStorage';

export const App = () => {
  const [contacts, setContacts] = useState(
    loadFromLocalStorage('contacts') ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  let [filter, setFilter] = useState('');

  useEffect(() => {
    saveToLocalStorage('contacts', contacts);
  }, [contacts]);

  const filterContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().startsWith(filter.toLowerCase());
    });
  };

  const handleInputChangeFilter = e => {
    setFilter((filter = e.target.value));
    filterContacts();
  };

  const deleteContactById = (id, contacts, setContacts) => {
    const filteredArr = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(filteredArr);
    setFilter((filter = ''));
  };

  return (
    <div className={css.container}>
      <HeadText title="Phonebook" />
      <PhonebookForm contacts={contacts} setContacts={setContacts} />
      <HeadText title="Contacts" />
      <LabelInput
        value={filter}
        handleInputChange={handleInputChangeFilter}
        type="text"
        name="filter"
        labelName="Find contacts by name"
      />
      {filterContacts().length ? (
        <ContactsList
          contacts={filterContacts()}
          setContacts={setContacts}
          deleteContactById={deleteContactById}
        />
      ) : (
        <NoContactsMessage name={filter} />
      )}
    </div>
  );
};

import { useState } from 'react';
import css from './PhonebookForm.module.css';
import { LabelInput } from 'components/label-input/LabelInput';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button } from 'components/button/Button';

export const PhonebookForm = ({ contacts, setContacts }) => {
  let [name, setName] = useState('');
  let [number, setNumber] = useState('');

  const addContact = e => {
    e.preventDefault();
    const newContact = [{ name, number, id: nanoid() }];
    if (contacts.some(contact => name === contact.name)) {
      alert(`${name} is already in contacts`);
    } else {
      const newArrOfContacts = [...contacts, ...newContact];
      setContacts(newArrOfContacts);
    }
    setName((name = ''));
    setNumber((number = ''));
  };

  return (
    <form className={css.form} onSubmit={addContact}>
      <LabelInput
        value={name}
        handleInputChange={e => {
          setName((name = e.target.value));
        }}
        placeholder="Annie Copeland"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        labelName="Name"
      />
      <LabelInput
        value={number}
        handleInputChange={e => {
          setNumber((number = e.target.value));
          // setNumber(number + e.nativeEvent.data);
        }}
        placeholder="227-91-26"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        labelName="Number"
      />
      <Button type="sumbit" text="Add button" />
    </form>
  );
};

PhonebookForm.propTypes = {
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
};

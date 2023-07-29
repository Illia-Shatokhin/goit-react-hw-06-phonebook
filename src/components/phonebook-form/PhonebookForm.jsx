import css from './PhonebookForm.module.css';
import { LabelInput } from 'components/label-input/LabelInput';
import { Button } from 'components/button/Button';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const PhonebookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contactData = [form.elements.name.value, form.elements.number.value];
    dispatch(addContact(contactData));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <LabelInput
        placeholder="Annie Copeland"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        labelName="Name"
      />
      <LabelInput
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

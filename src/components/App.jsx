import css from './App.module.css';
import { HeadText } from './head-text/HeadText';
import { ContactsList } from './contacts-list/ContactsList';
import { PhonebookForm } from './phonebook-form/PhonebookForm';
import { LabelInput } from './label-input/LabelInput';
import { filterChange } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <HeadText title="Phonebook" />
      <PhonebookForm />
      <HeadText title="Contacts" />
      <LabelInput
        handleInputChange={e => {
          dispatch(filterChange(e.target.value));
        }}
        type="text"
        name="filter"
        labelName="Find contacts by name"
      />
      <ContactsList />
    </div>
  );
};

import { ContactListItem } from 'components/contact-list-item/ContactsListItem';
import css from './ContactsList.module.css';
import { Button } from 'components/button/Button';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { NoContactsMessage } from 'components/noContactsMessage/noContactsMessage';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().startsWith(filter.toLowerCase());
    });
  };

  return (
    <ul className={css.list}>
      {filteredContacts().length ? (
        filteredContacts().map(contact => (
          <ContactListItem key={contact.id} contact={contact}>
            <Button
              type="button"
              text="Delete"
              id={contact.id}
              onClick={e => {
                dispatch(deleteContact(e.target.getAttribute('id')));
              }}
            />
          </ContactListItem>
        ))
      ) : (
        <NoContactsMessage name={filter} />
      )}
    </ul>
  );
};

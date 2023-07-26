import { ContactListItem } from 'components/contact-list-item/ContactsListItem';
import css from './ContactsList.module.css';
import { Button } from 'components/button/Button';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, setContacts, deleteContactById }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}>
          <Button
            type="button"
            text="Delete"
            id={contact.id}
            onClick={e => {
              deleteContactById(
                e.target.getAttribute('id'),
                contacts,
                setContacts
              );
            }}
          />
        </ContactListItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  setContacts: PropTypes.func,
  deleteContactById: PropTypes.func,
};

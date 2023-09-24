import { useDispatch, useSelector } from 'react-redux';

import {
  ContactListContainer,
  Item,
  List,
  Button,
} from './ContactsList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact => {
    const name = contact.name || '';
    const query = searchQuery || '';

    return name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <ContactListContainer>
        {filteredContacts.map(({ id, name, number }) => (
          <List key={id}>
            <Item>{name}</Item>
            <Item>{number}</Item>
            <Button onClick={() => dispatch(removeContact(id))}>Delete</Button>
          </List>
        ))}
      </ContactListContainer>
    </div>
  );
};

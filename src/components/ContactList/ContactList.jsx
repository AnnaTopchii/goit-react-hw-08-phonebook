import { useDispatch, useSelector } from 'react-redux';
// import { List, ListItem, Text, Button} from './ContactList.styled';

import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { ListGroup, Button } from 'react-bootstrap';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ListGroup as="ul">
      {visibleContacts.map(({ id, name, number }) => (
        <ListGroup.Item
          as="li"
          key={id}
          className="d-flex justify-content-between align-items-center"
        >
          <span>
            {name}: {number}
          </span>
          <Button
            variant="outline-warning"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
      {visibleContacts.length === 0 && (
        <p>Sorry, You have no contacts with such name</p>
      )}
    </ListGroup>

    // <List>
    //   {visibleContacts.map(({ id, name, phone }) => (
    //     <ListItem key={id}>
    //       <Text>
    //         {name}: {phone}
    //       </Text>
    //       <Button type="button" onClick={() => dispatch(deleteContact(id))}>
    //         Delete
    //       </Button>
    //     </ListItem>
    //   ))}
    //   {visibleContacts.length === 0 && (
    //     <p>Sorry, You have no contacts with such name</p>
    //   )}
    // </List>
  );
};

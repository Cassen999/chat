import React, { useContext } from 'react'
import { ContactsContext, iContactsContext } from '../contexts/ContactsProvider'
import { ListGroup } from 'react-bootstrap';

export default function Contacts() {

  const { contacts } = useContext(ContactsContext) as iContactsContext;
  
  return (
    <ListGroup variant='flush'>
      {contacts.length ? contacts.map(contact => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      )) : <div className='no-content-sidebar'>No Contacts</div>}
    </ListGroup>
  )
}

import React, { FormEvent, useContext, useState } from 'react'
import { iNewConversationModal } from '../interfaces/interfaces'
import { Modal, Form, Button } from 'react-bootstrap';
import { ContactsContext, iContactsContext } from '../contexts/ContactsProvider';
import { ConversationsContext, iConversationsContext } from '../contexts/ConversationsProvider';

const NewConversationModal = ({closeModal}: iNewConversationModal) => {
  const { contacts } = useContext(ContactsContext) as iContactsContext;
  const { createConversation } = useContext(ConversationsContext) as iConversationsContext;
  const [selectedContactIds, setSelectedContactIds] = useState<string[]>([])

  const handleCheckboxChange = (contactId: string) => {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }
  
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id) ? contact.id : undefined}
                isValid={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit" className='mt-3'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;

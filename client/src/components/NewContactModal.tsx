import React, { FormEvent, useContext, useRef } from 'react'
import { iNewContactModal } from '../interfaces/interfaces';
import { Button, Form, Modal } from 'react-bootstrap';
import { ContactsContext, iContactsContext } from '../contexts/ContactsProvider';

const NewContactModal = ({closeModal}: iNewContactModal) => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { createContact } = useContext(ContactsContext) as iContactsContext;
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!idRef.current?.value && !!nameRef.current?.value) {
      createContact(idRef.current?.value, nameRef.current?.value)
    };

    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" className='mt-3'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
};

export default NewContactModal;

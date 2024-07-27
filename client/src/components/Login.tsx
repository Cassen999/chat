import React, { FormEvent, useContext, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext, iGlobalContext } from './globalProvider/GlobalProvider';

export default function Login() {
  const idRef = useRef<any>();
  const { setId } = useContext(GlobalContext) as iGlobalContext;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setId(idRef.current.value)
  };

  const createNewId = () => {
    setId(uuidv4());
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="id-submit-btn">Login</Button>
        <Button variant="secondary" className="id-create-btn" onClick={createNewId}>Create A New ID</Button>
      </Form>
    </Container>
  );
};

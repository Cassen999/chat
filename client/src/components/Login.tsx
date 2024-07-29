import React, { FormEvent, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export const Login = ({ setValue }: any) => {
  const [inputValue, setInputValue] = useState<string>('');
  const idRef = useRef<any>();

  const onChange = (e: any) => setInputValue(e.target.value.trim());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(inputValue)
  };

  const createNewId = () => {
    setValue(uuidv4())
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form id='login-form' className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} onChange={(e) => onChange(e)} value={inputValue} required />
        </Form.Group>
        <Button type="submit" className="id-submit-btn">Login</Button>
        <Button variant="secondary" className="id-create-btn" onClick={createNewId}>Create A New ID</Button>
      </Form>
    </Container>
  );
};

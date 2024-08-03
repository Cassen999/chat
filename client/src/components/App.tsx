import React, { useEffect } from 'react';
import '../styles/index.scss';
import { Login } from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

const App = () => {
  const [id, setid] = useLocalStorage('id');

  const dashboard: JSX.Element = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    id ? dashboard : <Login setid={setid} />
  );
};

export default App;

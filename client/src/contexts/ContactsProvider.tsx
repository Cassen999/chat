import { createContext, useMemo, } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { iContact } from "../interfaces/interfaces";

export interface iContactsContext {
  contacts: iContact[];
  createContact: (id: string, name: string) => void;
}

export const ContactsContext = createContext<iContactsContext | null>(null);

export const ContactsProvider = (props: any) => {
  const { children } = props;
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id: string, name: string) => {
    setContacts((prevContacts: iContact[]) => {
      return [...prevContacts, { id, name }]
    })
  }

  const contextValues: iContactsContext = useMemo(() => ({
    contacts,
    createContact,
  }), [
    contacts,
    createContact
  ]);

  return (
    <ContactsContext.Provider value={contextValues}>
      {children}
    </ContactsContext.Provider>
  )
}

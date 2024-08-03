import { createContext, useContext, useMemo, } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { iConversations, iFormattedConversations, iRecipient } from "../interfaces/interfaces";
import { ContactsContext, iContactsContext } from "./ContactsProvider";

export interface iConversationsContext {
  conversations: iFormattedConversations[];
  createConversation: (recipients: string[]) => void;
}

export const ConversationsContext = createContext<iConversationsContext | null>(null);

export const ConversationsProvider = (props: any) => {
  const { children } = props;
  const [conversations, setConversations] = useLocalStorage('conversations', []);
  const { contacts } = useContext(ContactsContext) as iContactsContext;

  const createConversation = (recipients: string[]) => {
    setConversations((prevConversations: iConversations[]) => {
      return [...prevConversations, { recipients, messages: [] }]
    })
  };

  const formattedConversations: iFormattedConversations[] = conversations.map((conversation: iConversations) => {
    const recipients: iRecipient[] = conversation.recipients.map((recipient: string) => {
      const contact = contacts.find(contact => {
        return contact.id === recipient;
      });
      const name: string = (contact && contact.name) || recipient;
      return { id: recipient, name }
    });

    return { ...conversation, recipients };
  });

  const value = {
    conversations: formattedConversations,
    createConversation
  }

  const contextValues: iConversationsContext = useMemo(() => (value), [value]);

  return (
    <ConversationsContext.Provider value={contextValues}>
      {children}
    </ConversationsContext.Provider>
  )
}
export interface iUser {
  id: string;
}

export interface iNewContactModal {
  closeModal: () => void;
}

export interface iNewConversationModal {
  closeModal: () => void;
}

export interface iContact {
  id: string;
  name: string;
}

export interface iConversations {
  recipients: string[];
  messages: string[];
}

export interface iRecipient {
  id: string;
  name: string
}

export interface iFormattedConversations {
  conversation: iConversations;
  recipients: iRecipient[];
}
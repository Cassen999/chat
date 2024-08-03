import React, { useEffect, useState } from 'react'
import { iUser } from '../interfaces/interfaces';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewConversationModal from './NewConversationModal';
import NewContactModal from './NewContactModal';

const CONVERSATIONS_KEY: string = 'conversations';
const CONTACTS_KEY: string = 'contacts';

export default function Sidebar(id: iUser) {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const conversationOpen = activeKey === CONVERSATIONS_KEY;

  const closeModal = (): void => setModalOpen(false)
  
  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={(e) => setActiveKey(e as string)}>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="tab-content overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-end small">
          Your Id: <span className="text-muted">{id.id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {
          conversationOpen ?
            <NewConversationModal closeModal={closeModal} />:
            <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}

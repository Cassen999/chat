import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { ConversationsContext, iConversationsContext } from '../contexts/ConversationsProvider'

export default function Conversations() {
  const { conversations } = useContext(ConversationsContext) as iConversationsContext;
  return (
    <ListGroup variant='flush'>
      {conversations.map((conversation, i) => (
        <ListGroup.Item key={i}>
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

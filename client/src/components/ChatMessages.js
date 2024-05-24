import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ChatMessages({ messages }) {
  return (
    <div>
      <h5>Messages</h5>
      <ListGroup>
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>
            <strong>{msg.user}:</strong> {msg.msg}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ChatMessages;

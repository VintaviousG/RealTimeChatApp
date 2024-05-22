import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function MessageInput({ sendMessage }) {
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    };
    
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Send Message
        </Button>
        </Form>
    );
}

export default MessageInput;
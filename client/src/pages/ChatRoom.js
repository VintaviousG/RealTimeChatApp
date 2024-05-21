import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Container } from 'react-bootstrap';
import io from 'socket.io-client';

const socket = io('http://localhost:5005');

function ChatRoom() { 
        const [message, setMessage] = useState('');
        const [messages, setMessages] = useState([]);
        const [room, setRoom] = useState('general'); //example room name

        useEffect(() => {
                //Join the chat room 
                socket.emit('joinRoom', room);

                //Listen for messages from the server
                socket.on('chat message', (msg) => {
                        setMessages((prevMessages) => [...prevMessages, msg]);
                });

                //Clean up the effect component unmounts
                return () => {
                        socket.off('chat message');
                        socket.emit('leaveRoom', room);
                };

        }, [room]);

        //sending messages
        const sendMessage = (evt) => {
                evt.preventDefault();
                if (message.trim()) {
                        socket.emit('chat message', message, room);
                        setMessage('');   
                }
        };

        return (
                <Container>
                <h1>Chat Room: {room}</h1>
                <ListGroup>
                    {messages.map((msg, index) => (
                        <ListGroup.Item key={index}>{msg}</ListGroup.Item>
                    ))}
                </ListGroup>
                <Form onSubmit={sendMessage}>
                    <Form.Group controlId="message">
                        <Form.Control
                            type="text"
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Container>
        );
}


export default ChatRoom;
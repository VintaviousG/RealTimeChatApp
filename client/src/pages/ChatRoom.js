import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';

import NavBar from '../components/NavBar';
import UserList from '../components/UserList';
import ChatMessages from '../components/ChatMessages';
import MessageInput from '../components/MessageInput';

const socket = io('http://localhost:5005'); // Connect to the server

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]); // List of users in the chat room
  const [username, setUsername] = useState('John Doe'); // Example username
  const [room, setRoom] = useState('general'); // Example room name

  useEffect(() => {
    // Join the chat room
    socket.emit('joinRoom', room);

    // Listen for messages from the server
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Listen for user updates from the server
    socket.on('roomUsers', (users) => {
      setUsers(users);
    });

    // Clean up on component unmount
    return () => {
      socket.off('chat message');
      socket.off('roomUsers');
      socket.emit('leaveRoom', room);
    };
  }, [room]);

  const sendMessage = (message) => {
    socket.emit('chat message', message, room);
  };

  return (
    <Container fluid>
      <NavBar username={username} room={room} />
      <Row>
        <Col md={3}>
          <UserList users={users} />
        </Col>
        <Col md={9}>
          <ChatMessages messages={messages} />
          <MessageInput sendMessage={sendMessage} />
        </Col>
      </Row>
    </Container>
  );
}

export default ChatRoom;

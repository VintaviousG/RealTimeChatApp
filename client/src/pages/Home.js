import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      
        <h1>Welcome to the Real-Time Chat App</h1>
        <p>Join a chat room to start chatting with others in real-time.</p>
        <Link to="/chat">
          <Button variant="primary">Go to Chat Room</Button>
        </Link>
      
    </Container>
  );
}

export default Home;

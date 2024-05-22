import React from 'react';
import { ListGroup, Card, Button, Container } from 'react-bootstrap';

function UserList({ users }) {
  return (
    <div>
      
      <Container className="border border-danger">
      <h5>Users in Room</h5>
      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item key={index}>{user}</ListGroup.Item>
        ))}
      </ListGroup>

        
      </Container>
     
  

    </div>
  );
}

export default UserList;

import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        //Basic Validation tyou can add more validation here
        if(username.trim() && password.trim()){
            alert('Please enter username and password');
            handleLogin();
        }
        
    }

    const handleLogin = () => {
        //You can add your login logic here
        console.log('Login logic here');
    }

    return (
        <Container>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      );

};

export default Login;
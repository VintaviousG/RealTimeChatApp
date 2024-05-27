import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import LoginButton from '../components/LoginButton';

const Login = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   
  const handleSubmit = (e) => {
      e.preventDefault();
      // Basic validation, you can add more sophisticated checks    
    if (username.trim() && password.trim()) {
      handleLogin(username, password);
    }
  };

    const handleLogin = (username, password) => {
        //You can add your login logic here
        console.log('Login logic here');
        console.log('Username:', username);
        console.log('Password:', password);
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
                <LoginButton/>
          </Form>
        </Container>
      );

};

export default Login;
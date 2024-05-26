import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton({ handleLogin }) {     
    return (
        <Button variant="outline-primary" onClick={handleLogin}>
            Login
        </Button>
    );
}

export default LoginButton;
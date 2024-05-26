import React from 'react';
import { Button } from 'react-bootstrap';

function SignupButton({ handleSignup }) { 
    return (
        <Button variant="outline-primary" onClick={handleSignup}>
            Signup
        </Button>
    );
}

export default SignupButton;
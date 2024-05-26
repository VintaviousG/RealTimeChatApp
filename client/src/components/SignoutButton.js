import React from 'react';
import { Button } from 'react-bootstrap';

function SignoutButton({ handleSignout }) { 
    return (
        <Button variant="outline-danger" onClick={handleSignout}>
            Signout
        </Button>
    );
}

export default SignoutButton;
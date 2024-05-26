import React from 'react';
import { Button } from 'react-bootstrap';

function LogoutButton({ handleLogout }) { 
    return (
        <Button variant="outline-danger" onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default LogoutButton;
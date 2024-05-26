import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';

import { Navbar, Button } from 'react-bootstrap';

function NavBar({ username, room }) {
  return (
    <Navbar bg="light" expand="lg">

      <Nav.Link href="/">
     <Button variant="primary">Go to Home Page</Button>
            </Nav.Link>
      
      <Navbar.Brand>Chat Room: {room}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{username}</a>
        </Navbar.Text>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;

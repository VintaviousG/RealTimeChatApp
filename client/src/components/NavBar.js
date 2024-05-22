import React from 'react';
import { Navbar } from 'react-bootstrap';

function NavBar({ username, room }) {
  return (
    <Navbar bg="light" expand="lg">
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

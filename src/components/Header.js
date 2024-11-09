import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" id="nav-bar">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
          <img src={logo} alt="Company Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2  my-lg-0"
            style={{ maxHeight: '400px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/About">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/Services">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/Contact">CONTACT</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

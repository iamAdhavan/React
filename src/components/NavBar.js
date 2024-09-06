import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/Counter">Counter</Nav.Link>
            
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
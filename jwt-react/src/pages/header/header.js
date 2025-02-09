import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
const Header = () => 
{
    return (
       <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    )
}

export default Header
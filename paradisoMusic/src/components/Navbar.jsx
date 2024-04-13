import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/ParadisoMusicLogo.png';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

export const NavbarComponent = () => {
  return (
    <Navbar variant='dark' expand="lg" style={{ backgroundColor: '#110A0C', color: '#ffffff' }} >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img style={{ width: '70px', width: '70px' }} src={logo} alt="Paradiso Music Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" color='#ffffff' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px',  }}>SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/events" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px',  }}>EVENTS</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px',  }}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px',  }}>CONTACT US</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#link" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px',  }}>ESP</Nav.Link>
            <Nav.Link href="#link" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px',  }}>ENG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

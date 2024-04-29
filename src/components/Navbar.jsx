import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/ParadisoMusicLogo.png';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import Whatsapp from '../assets/Footer/whatsapp.png';

export const NavbarComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };
  
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
    };

  return (
    <div className="mx-auto lg:px-20 px-8" style={{backgroundColor: '#110A0C'}}>
      <Navbar variant="dark" expand="lg" style={{ color: '#ffffff' }}>
        <Navbar.Brand as={Link} to="/">
          <img style={{ width: '70px', height: '70px' }} src={logo} alt="Paradiso Music Logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" color='#ffffff' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.services')}</Nav.Link>
            <Nav.Link as={Link} to="/events" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.events')}</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.about')}</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.contact')}</Nav.Link>
          </Nav>
          <Nav className="ms-auto mr-0 flex flex-row items-center">
            <span className="flex lg:hidden mr-2">{t('nav.idioma')}: </span>
            <Nav.Link href="#link" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px', backgroundColor: i18n.language === 'en' ? '#444' : 'transparent', padding: '8px', borderRadius: '4px' }} onClick={() => changeLanguage('en')}>ENG {i18n.language === 'ENG'}</Nav.Link>
            <Nav.Link href="#link" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px', backgroundColor: i18n.language === 'es' ? '#444' : 'transparent', padding: '8px', borderRadius: '4px' }} onClick={() => changeLanguage('es')}>ESP {i18n.language === 'ESP'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <div className={`d-flex justify-content-center ${isCollapsed ? 'd-none' : ''}`}>
            <a href="https://wa.me/13059700170">
              <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6 ml-3" />
            </a>
          </div>
      </Navbar>
    </div>
  );
};

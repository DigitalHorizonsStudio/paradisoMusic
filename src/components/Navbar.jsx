import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/ParadisoMusicLogo.png';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import Whatsapp from '../assets/Footer/whatsapp.png';
import Instagram from '../assets/Footer/instagram.png';
import Viber from '../assets/Footer/viber.png';

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
        <div className="lg:hidden gap-3 ml-5 flex flex-row items-center justify-center text-center">
            <ul className="flex flex-row justify-center text-xs">
              <li className='xl:hidden'>
                <a href="tel:+13059700170">
                    <img src={Viber} alt="Viber" className="w-5 h-5 mx-2" />
                   
                </a>
          </li>
              <li>
                <a href="https://www.instagram.com/paradisomusicpro">
                  <img src={Instagram} alt="Instagram" className="w-5 h-5 mx-2" />
                </a>
              </li>
            </ul>

        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" color='#ffffff' />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.services')}</Nav.Link>
            <Nav.Link as={Link} to="/events" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.events')}</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.about')}</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>{t('nav.contact')}</Nav.Link>
          </Nav>
          <Nav className="flex flex-row items-center gap-3 lg:justify-end">
            {/* Iconos de redes sociales */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-3">
              <ul className="flex flex-row justify-center text-xs">
                <li>
                  <div className='flex flex-row items-center gap-2'>
                    <img src={Viber} alt="Correo" className="w-5 h-5 mx-2" />
                    <label>+1 (305) 970‑0170</label>
                  </div>
                </li>
                {/* <li>
                  <a href="https://www.instagram.com/paradisomusicpro">
                    <img src={Instagram} alt="Instagram" className="w-5 h-5 mx-2" />
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Menú de idiomas */}
            <div className="flex flex-row items-center justify-center text-center bc-red xl:m-2 xl:px-2 text-black rounded-lg xl:py-2 sm:flex-col">
              <span className="lg:flex mr-2 text-white" style={{fontSize: '12px'}}>{t('nav.idioma')}: </span>
              <Nav.Link href="#link" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '12px', backgroundColor: i18n.language === 'en' ? '#ff0080' : 'transparent', padding: '8px', borderRadius: '4px' }} onClick={() => changeLanguage('en')}>ENG {i18n.language === 'ENG'}</Nav.Link>
              <Nav.Link href="#link" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '12px', backgroundColor: i18n.language === 'es' ? '#ff0080' : 'transparent', padding: '8px', borderRadius: '4px' }} onClick={() => changeLanguage('es')}>ESP {i18n.language === 'ESP'}</Nav.Link>
            </div>

              {/* Iconos de redes sociales */}
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

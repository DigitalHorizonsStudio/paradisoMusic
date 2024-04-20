import React from 'react';
import {Link} from 'react-router-dom'
import ParadisoLogo from '../assets/ParadisoMusicLogo.png';
import Whatsapp from '../assets/Footer/whatsapp.png';
import Instagram from '../assets/Footer/instagram.png';
import Correo from '../assets/Footer/correo.png';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-[#110A0C] mx-auto px-20 py-3 flex flex-col xl:flex-row items-center justify-between">
                <div className="flex place-content-center">
                    <Link to="/">
                    <img src={ParadisoLogo} alt="Logo" className="w-35 h-35 ml-0 xl:ml-8 mr-8 mb-4 xl:mb-0" />
                    </Link>
                    <div className="text-white ml-12 mt-3">
                        <h3 className="text-m mb-2">{t(`nav.Links`)}</h3>
                        <ul className="list-none text-xs space-y-2">
                            <li><Link to="/aboutus" className="text-gray-300 hover:text-white">About us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                            <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
                            <li><Link to="/contactus" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="text-white ml-12 mt-3">
                        <h3 className="text-m mb-2">{t('nav.services')}</h3>
                        <ul className="list-none text-xs space-y-2">
                            <li><Link to="/services/Staging" className="text-gray-300 hover:text-white">{t('services.titles.Staging')}</Link></li>
                            <li><Link to="/services/Entertainment" className="text-gray-300 hover:text-white">{t('services.titles.Entertainment')}</Link></li>
                            <li><Link to="/services/Video" className="text-gray-300 hover:text-white">{t('services.titles.Video')}</Link></li>
                            <li><Link to="/services/Lighting" className="text-gray-300 hover:text-white">{t('services.titles.Lighting')}</Link></li>
                            <li><Link to="/services/EquipmentRental" className="text-gray-300 hover:text-white">{t('services.titles.EquipmentRental')}</Link></li>
                            <li><Link to="/services/Live%20Sound" className="text-gray-300 hover:text-white">{t('services.titles.Live Sound')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-4 xl:mt-0 mr-4">
                    <ul className="flex flex-row justify-center text-xs">
                        <li>
                            <a href="https://wa.me/13059700170">
                                <img src={Whatsapp} alt="WhatsApp" className="w-4 h-4 mx-2" />
                            </a>
                        </li>

                        <li><a href="https://www.instagram.com/paradisomusicpro"><img src={Instagram} alt="Instagram" className="w-4 h-4 mx-2" /></a></li>
                        <li>
                            <a href="mailto:info@paradisomusicpro.com">
                                <img src={Correo} alt="Correo" className="w-4 h-4 mx-2" />
                            </a>
                        </li>
                    </ul>
                    <div className="text-white text-xs space-y-1 text-center mt-4 xl:mt-0">
                    <p>PARADISO MUSIC LLC.</p>
                    <p>3565 NW 60th Street Miami, Florida 33142</p>
                </div>
                </div>
              
        </footer>
    );
}

export default Footer;

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
        <footer className="bg-[#110A0C] mx-auto px-20 py-10 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex justify-center gap-0 sm:gap-2">
                    <Link to="/">
                    <img src={ParadisoLogo} alt="Logo" className="w-35 h-35 ml-0 mr-8 d-none d-sm-block" />
                    </Link>
                    <div className="text-white lg:ml-8 lg:mt-5">
                        <h3 className="text-m mb-3 ">{t(`nav.Links`)}</h3>
                        <ul className="list-none text-xs w-20 space-y-2 text-start">
                            <li><Link to="/aboutus" className="text-gray-300 hover:text-white">{t('nav.about')}</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">{t('nav.services')}</Link></li>
                            <li><Link to="/events" className="text-gray-300 hover:text-white">{t('nav.events')}</Link></li>
                            <li><Link to="/contactus" className="text-gray-300 hover:text-white">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>
                    <div className="text-white lg:ml-5 flex-wrap sm:pt-5">
                        <h3 className="text-m mb-3 ml-2">{t('nav.services')}</h3>
                        <div className='flex justify-start gap-3 ml-2'>
                            <ul className="list-none text-xs space-y-2 flex flex-col flex-wrap h-50 justify-start text-start">
                                <li><Link to="/services/staging" className="text-gray-300 hover:text-white">{t('services.titles.staging')}</Link></li>
                                <li><Link to="/services/video" className="text-gray-300 hover:text-white">{t('services.titles.video')}</Link></li>
                                <li><Link to="/services/lighting" className="text-gray-300 hover:text-white">{t('services.titles.lighting')}</Link></li>
                                <li><Link to="/services/audiovisual" className="text-gray-300 hover:text-white">{t('services.titles.audiovisual')}</Link></li>
                            </ul>
                            <ul className="list-none text-xs space-y-2 flex flex-col flex-wrap h-50 justify-start w-20 text-start">
                                <li><Link to="/services/equipmentRental" className="text-gray-300 w-100 hover:text-white">{t('services.titles.equipmentrental')}</Link></li>
                                <li><Link to="/services/live sound" className="text-gray-300 hover:text-white">{t('services.titles.live sound')}</Link></li>
                                <li><Link to="/services/entertainment" className="text-gray-300 hover:text-white">{t('services.titles.entertainment')}</Link></li>
                                <li><Link to="/services/recording" className="text-gray-300 hover:text-white">{t('services.titles.recording')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-5 mr-4">
                    <ul className="flex flex-row justify-center text-xs pt-1">
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
                    <div className="text-white text-xs space-y-1 text-center mt-4 lg:mt-0">
                    <p>PARADISO MUSIC LLC.</p>
                    <p>3565 NW 60th Street Miami, Florida 33142</p>
                </div>
                </div>
              
        </footer>
    );
}

export default Footer;

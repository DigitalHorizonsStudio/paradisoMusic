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
        <footer className="bg-[#110A0C] mx-auto px-20 py-10 flex flex-col xl:flex-row items-center justify-between">
                <div className="flex align-items-center">
                    <Link to="/">
                    <img src={ParadisoLogo} alt="Logo" className="w-35 h-35 ml-0 mr-8" />
                    </Link>
                    <div className="text-white ml-8">
                        <h3 className="text-m mb-2">{t(`nav.Links`)}</h3>
                        <ul className="list-none text-xs space-y-2">
                            <li><Link to="/aboutus" className="text-gray-300 hover:text-white">{t('nav.about')}</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">{t('nav.services')}</Link></li>
                            <li><Link to="/events" className="text-gray-300 hover:text-white">{t('nav.events')}</Link></li>
                            <li><Link to="/contactus" className="text-gray-300 hover:text-white">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>
                    <div className="text-white ml-12" >
                        <h3 className="text-m mb-2">{t('nav.services')}</h3>
                        <div className='flex justify-start gap-3'>
                        <ul className="list-none text-xs space-y-2 flex flex-col flex-wrap h-50 justify-start">
                            <li><Link to="/services/Staging" className="text-gray-300 hover:text-white">{t('services.titles.Staging')}</Link></li>
                            <li><Link to="/services/Video" className="text-gray-300 hover:text-white">{t('services.titles.Video')}</Link></li>
                            <li><Link to="/services/Lighting" className="text-gray-300 hover:text-white">{t('services.titles.Lighting')}</Link></li>
                            <li><Link to="/services/Audiovisual" className="text-gray-300 hover:text-white">{t('services.titles.Audiovisual')}</Link></li>
                         
                        </ul>
                        <ul className="list-none text-xs space-y-2 flex flex-col flex-wrap h-50 justify-start">
                            <li><Link to="/services/EquipmentRental" className="text-gray-300 hover:text-white">{t('services.titles.EquipmentRental')}</Link></li>
                        <li><Link to="/services/Live%20Sound" className="text-gray-300 hover:text-white">{t('services.titles.Live Sound')}</Link></li>
                        <li><Link to="/services/Entertainment" className="text-gray-300 hover:text-white">{t('services.titles.Entertainment')}</Link></li>
                            <li><Link to="/services/Recording" className="text-gray-300 hover:text-white">{t('services.titles.Recording')}</Link></li>

                        </ul>
                        </div>
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

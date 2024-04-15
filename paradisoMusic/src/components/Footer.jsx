import React from 'react';
import {Link} from 'react-router-dom'
import ParadisoLogo from '../assets/ParadisoMusicLogo.png';
import Whatsapp from '../assets/Footer/whatsapp.png';
import Instagram from '../assets/Footer/instagram.png';
import Correo from '../assets/Footer/correo.png';


const Footer = () => {
    return (
        <footer className="bg-[#110A0C] pt-5 xl:w-full">
            <div className="container flex flex-col xl:flex-row items-center justify-between">
                <div className="flex items-start">
                    <img src={ParadisoLogo} alt="Logo" className="w-40 h-40 mr-8 mb-4 xl:mb-0" />
                    <div className="text-white">
                        <h3 className="font-bold text-lg mb-2">Enlaces</h3>
                        <ul className="list-none text-sm">
                            <li><Link to="/aboutus" className="text-gray-300 hover:text-white">About us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                            <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
                            <li><Link to="/contactus" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="text-white ml-8">
                        <h3 className="font-bold text-lg mb-2">Servicios</h3>
                        <ul className="list-none text-sm">
                            <li><Link to="/services/staging" className="text-gray-300 hover:text-white">Staging</Link></li>
                            <li><Link to="/services/enterteinment" className="text-gray-300 hover:text-white">Entertainment</Link></li>
                            <li><Link to="/services/video" className="text-gray-300 hover:text-white">Video</Link></li>
                            <li><Link to="/services/lighting" className="text-gray-300 hover:text-white">Lighting</Link></li>
                            <li><Link to="/services/equipmentRental" className="text-gray-300 hover:text-white">Equipment Rental</Link></li>
                            <li><Link to="/services/livesound" className="text-gray-300 hover:text-white">Live Sound</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-4 xl:mt-0 mr-4">
                    <ul className="flex flex-row justify-center">
                    <li>
                            <a href="https://wa.me/13059700170">
                                <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6 mx-2" />
                            </a>
                        </li>

                        <li><a href="https://www.instagram.com/paradisomusicpro"><img src={Instagram} alt="Instagram" className="w-6 h-6 mx-2" /></a></li>
                        <li>
                            <a href="mailto:info@paradisomusicpro.com">
                                <img src={Correo} alt="Correo" className="w-6 h-6 mx-2" />
                            </a>
                        </li>
                    </ul>
                    <div className="text-white text-center mt-4 xl:mt-0">
                    <p>PARADISO MUSIC LLC.</p>
                    <p>3565 NW 60TH STREET MIAMI, FLORIDA 33142</p>
                </div>
                </div>
              
            </div>
        </footer>
    );
}

export default Footer;

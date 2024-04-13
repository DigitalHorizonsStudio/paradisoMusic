import React from 'react';
import ParadisoLogo from '../assets/ParadisoMusicLogo.png';
import Facebook from '../assets/Footer/facebook.png';
import Instagram from '../assets/Footer/instagram.png';
import Linkedin from '../assets/Footer/linkedin.png';
import Youtube from '../assets/Footer/youtube.png';

const Footer = () => {
    return (
        <footer className="bg-black pt-5 xl:w-full">
            <div className="container flex flex-col xl:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-0">
                    <img src={ParadisoLogo} alt="Logo" className="w-40 h-40 mr-8 mb-4 md:mb-0" />
                    <div className="flex flex-col mb-4 md:mb-0 text-white">
                        <h3 className="font-bold text-lg mb-2">Enlaces</h3>
                        <ul className="list-none text-sm">
                            <li><a href="#" className="text-gray-300 hover:text-white">About us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-0 text-white ml-4 md:ml-8">
                        <h3 className="font-bold text-lg mb-2">Servicios</h3>
                        <ul className="list-none text-sm">
                            <li><a href="#" className="text-gray-300 hover:text-white">Staging</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Entertainment</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Video</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Lighting</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Equipment Rental</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Live Sound</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-row justify-center">
                        <li><a href="#"><img src={Facebook} alt="Facebook" className="w-6 h-6 mx-2" /></a></li>
                        <li><a href="#"><img src={Instagram} alt="Instagram" className="w-6 h-6 mx-2" /></a></li>
                        <li><a href="#"><img src={Linkedin} alt="Linkedin" className="w-6 h-6 mx-2" /></a></li>
                        <li><a href="#"><img src={Youtube} alt="Youtube" className="w-6 h-6 mx-2" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

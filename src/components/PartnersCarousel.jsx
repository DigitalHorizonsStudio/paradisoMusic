import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useTranslation } from 'react-i18next';
import BallAndChain from '../assets/partners/BallAndChain.png';
import Baltimore from '../assets/partners/Baltimore.png';
import Cheeca from '../assets/partners/Cheeca.png';
import Dolphin from '../assets/partners/Dolphin.png';
import Frail from '../assets/partners/Frail.png';
import Grazianos from '../assets/partners/Grazianos.png';
import HardRock from '../assets/partners/HardRock.png';
import Image from '../assets/partners/Image.png';
import IslandGrill from '../assets/partners/IslandGrill.png';
import magic from '../assets/partners/magic.png';
import MIA from '../assets/partners/MIA.png';
import Montys from '../assets/partners/Montys.png';
import Rusty from '../assets/partners/Rusty.png';
import Vezasur from '../assets/partners/VezaSur.png';

const images = [
    BallAndChain,
    Baltimore,
    Cheeca,
    Dolphin,
    Frail,
    Grazianos,
    HardRock,
    Image,
    IslandGrill,
    magic,
    MIA,
    Montys,
    Rusty,    
    Vezasur
];


export const CarouselPartners = () => {
    const { t } = useTranslation();
    return (
      <div className='bg-[#110A0C]'>
          <h1 className=" text-3xl sm:text-5xl sm:mb-4 font-semibold text-white mt-6 text-center">{t('partners.title')}</h1>
      <Carousel data-bs-theme="dark">
        {images.map((image, index) => (
            <Carousel.Item key={index}>
            <div className="img-container">
              <img
                className="img-carousel bg-[#110A0C] object-contain rounded-lg mb-2 hover:opacity-40 p-16 transition-opacity duration-200"
                src={image}                
                />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
        </div>  
    );
  };



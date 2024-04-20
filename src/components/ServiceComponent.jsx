import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { NavbarComponent } from './Navbar';
import Footer from './Footer';
import enterteinment from '../assets/enterteinment.png';
import rental from '../assets/rental.png';
import lighting from '../assets/lighting.png';
import liveSound from '../assets/liveSound.png';
import stage from '../assets/stage.png';
import video from '../assets/video.png';
import recording from '../assets/podcast1.png'
import audiovisual from '../assets/setAudio.png'

const imageMap = {
  "Staging": stage,
  "Entertainment": enterteinment,
  "Video": video,
  "Lighting": lighting,
  "EquipmentRental": rental,
  "Live Sound": liveSound,
  "Recording": recording,
  "Audiovisual": audiovisual
};


const ServiceComponent = () => {
  const { t } = useTranslation();
    const { title } = useParams(); 
    const image = imageMap[title]; 
    const descriptions = t(`services.descriptions.${title}`, { returnObjects: true });
    return (
        <div>
          <NavbarComponent />
          <div className="flex-1 bg-[#110A0C] border-b border-zinc-700" >
            <div className="container mx-auto px-20 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img className="mx-auto w-full max-w-full md:max-w-none" src={image} alt={title} />
                <div className="text-white">
                  <h2 className="text-6xl mb-4 inline-block border-b-[1px] border-white font-montserrat">{t(`services.titles.${title}`)}</h2>
                  <ul className="list-disc pl-6">
                    {descriptions.map((description, index) => (
                      <li key={index} className="mb-2">{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

ServiceComponent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  serviceId: PropTypes.string.isRequired, // Añadido: Identificador único del servicio
};

export default ServiceComponent;

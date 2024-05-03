import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { NavbarComponent } from './Navbar';
import Footer from './Footer';
import enterteinment from '../assets/enterteinment.png';
import rental from '../assets/servicesComponent/rental.png';
import lighting from '../assets/servicesComponent/lighting.png';
import liveSound from '../assets/servicesComponent/livesound.png';
import stage from '../assets/servicesComponent/staging.png';
import video from '../assets/servicesComponent/video.png';
import audiovisual from '../assets/servicesComponent/audiovisual.png'
import recording from '../assets/servicesComponent/socialpodcast.png'
import Correo from '../assets/Footer/correo.png';
import Viber from '../assets/Footer/viber.png';

const imageMap = {
  "staging": stage,
  "entertainment": enterteinment,
  "video": video,
  "lighting": lighting,
  "equipmentRental": rental,
  "live sound": liveSound,
  "recording": recording,
  "audiovisual": audiovisual
};


const ServiceComponent = () => {
  const { t } = useTranslation();
    const { title } = useParams(); 
    const image = imageMap[title]; 
    const descriptions = t(`services.descriptions.${title}`, { returnObjects: true });

    
    return (
        <div className=" overflow-hidden h-max">
          <NavbarComponent />
          <div className="flex-1 bg-[#110A0C] border-b border-zinc-700 py-4 " >
            <div className="container mx-auto py-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img className="mx-auto md:max-w-none rounded "  loading='lazy' src={image} alt={title} style={{
                  height: '40rem',
                  width: '35rem',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '10px',
                  maxHeight: '30rem'
                }} />
                <div className="text-white flex flex-col items-start">
                  <h2 className="text-xl pt-10 lg:text-6xl mb-4 inline-block border-b-[1px] border-white font-montserrat">{t(`services.titleServices.${title}`)}</h2>
                  <ul>
                    {descriptions.map((description, index) => (
                      <li key={index} className="mb-2">{description}</li>
                    ))}
                  </ul>
                <ul className="flex flex-col gap-3 justify-center text-xs py-5">
                  <li>
                  <a class="flex flex-row items-center gap-2" href="mailto:info@paradisomusicpro.com">
                    <img src={Correo} alt="Correo" class="w-5 h-5 mx-2" />
                    <label>info@paradisomusicpro.com</label>
                  </a>
                </li>

                <li className='xl:hidden'>
                  <a class="phone-number flex flex-row items-center gap-2 hover:text-blue-500" href="tel:+13059700170">
                    <img src={Viber} alt="Phone" class="w-5 h-5 mx-2" />
                    <label>+1 (305) 970‑0170</label>
                  </a>
                </li>
                <li className='xl:flex hidden'>
                  <div class="phone-number flex flex-row items-center gap-2 hover:text-blue-500" href="tel:+13059700170">
                    <img src={Viber} alt="Phone" class="w-5 h-5 mx-2" />
                    <label>+1 (305) 970‑0170</label>
                  </div>
                </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
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

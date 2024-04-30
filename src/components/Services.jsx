import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import enterteinment from '../assets/enterteinment.png';
import rental from '../assets/rental.png';
import lighting from '../assets/lighting.png';
import liveSound from '../assets/liveSound.png';
import stage from '../assets/stage.png';
import video from '../assets/video.png';
import Audiovisual from '../assets/podcast1.png'
import Recording from '../assets/setAudio.png'

import '../components/Services.css'

export const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleServiceClick = (title) => {
    navigate(`/services/${title}`, { state: { title } });
  };

  return (
    <div className="bg-white flex flex-col items-center mx-auto px-20 pb-20">
      <h1 className="text-3xl sm:text-5xl xl:text-6xl text-black sm: mb-2 sm: pt-8 xl:mt-10 text-center font-semibold" style={{ fontFamily: 'Montserrat' }}>{t('services.title')}</h1>
      <h1 className="text-xl sm:text-4xl xl:text-4xl text-black sm: mb-4 text-center sm:pt-3 sm:pb-6 font-semibold" style={{ fontFamily: 'Montserrat' }}>{t('services.title2')}</h1>
      
     
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:pt-6 pb-6 gap-10 ">
        <ServiceLink image={liveSound} title={t('services.titles.Live Sound')} onClick={() => handleServiceClick("Live Sound")} />
        <ServiceLink image={stage} title={t('services.titles.Staging')} onClick={() => handleServiceClick("Staging")} />
        <ServiceLink image={lighting} title={t('services.titles.Lighting')} onClick={() => handleServiceClick("Lighting")} />
        <ServiceLink image={video} title={t('services.titles.Video')} onClick={() => handleServiceClick("Video")} />
        <ServiceLink image={rental} title={t('services.titles.EquipmentRental')} onClick={() => handleServiceClick("EquipmentRental")} />
        <ServiceLink image={enterteinment} title={t('services.titles.Entertainment')} onClick={() => handleServiceClick("Entertainment")} />
      </div>
      <div className="w-full ">
        <div className='relative flex justify-center'>
          <button onClick={() => handleServiceClick("Audiovisual")} className="relative">
            <img src={Recording} alt={'Recording'} className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none', height: "10rem", width: "72rem", objectFit: "cover" }} />
            <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center  bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">{t('services.audiovisual')}</h2>
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full shadow-lg">{t('services.new')}</span>
          </button>
        </div>
        <div className='relative flex justify-center mt-8 mb-0'>
          <button onClick={() => handleServiceClick("Recording")} className="relative">
            <img src={Audiovisual} alt={'Audiovisual'} className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none', height: "10rem", width: "72rem", objectFit: "cover" }} />
            <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center  bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">{t('services.recording')}</h2>
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full shadow-lg">{t('services.new')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ServiceLink = ({ image, title, onClick }) => {
  return (
    <div className="relative">
      <button onClick={onClick}>
        <img src={image} alt={title} className="mobile-styles w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none'}} />
        <h2 className="opacity-80 absolute mt-8 inset-0 flex items-start justify-center text-xl font-bold text-center bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">{title}</h2>
      </button>
    </div>
  );
};

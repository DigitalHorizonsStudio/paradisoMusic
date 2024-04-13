import React from 'react';
import enterteinment from '../assets/enterteinment.png';
import rental from '../assets/rental.png';
import lighting from '../assets/lighting.png';
import liveSound from '../assets/liveSound.png';
import stage from '../assets/stage.png';
import video from '../assets/video.png';
import podcast from '../assets/podcast1.png'
import setAudio from '../assets/setAudio.png'

import { useNavigate } from 'react-router-dom';

export const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (title, image, descriptions) => {
    // Navigate to the service details page
    navigate(`/services/${title}`, { state: { title} });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-evenly items-center p-10">
      <h1 className="text-3xl sm:text-5xl xl:text-6xl text-black xl:mb-10 xl:mt-10 text-center sm:pt-3 sm:pb-6 font-semibold" style={{ fontFamily: 'Montserrat' }}>Transform your Miami events</h1>
            <div className="w-full">
                <div className='relative flex justify-center'>
            <button>
                <img src={podcast} alt={'podcast'} className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none', height: "10rem",
                width: "72rem",
                objectFit: "cover" }} />
                <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center  bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">Audiovisual studios</h2>
            </button>
            </div>
            <div className='relative flex justify-center'>
            <button >
            <img src={setAudio} alt={'podcaste'} className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none', height: "10rem",
                width: "72rem",
                objectFit: "cover" }} />
                <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center  bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">Recording Studios</h2>
            </button>
            </div>
                </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:pt-6 pb-6 gap-10 ">
        <ServiceLink image={stage} title="Staging" onClick={() => handleServiceClick("Staging")} />
        <ServiceLink image={enterteinment} title="Entertainment" onClick={() => handleServiceClick("Entertainment")} />
        <ServiceLink image={video} title="Video" onClick={() => handleServiceClick("Video")} />
        <ServiceLink image={lighting} title="Lighting" onClick={() => handleServiceClick("Lighting")} />
        <ServiceLink image={rental} title="Equipment Rental" onClick={() => handleServiceClick("Equipment Rental")} />
        <ServiceLink image={liveSound} title="Live Sound" onClick={() => handleServiceClick("Live Sound")} />
      </div>
    </div>
  );
};

const ServiceLink = ({ image, title, onClick }) => {
  return (
    <div className="relative ">
      <button onClick={onClick}>
        <img src={image} alt={title} className=" w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none' }} />
        <h2 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center  bg-opacity-50 text-white rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">{title}</h2>
      </button>
    </div>
  );
};

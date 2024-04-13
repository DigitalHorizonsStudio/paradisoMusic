import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { NavbarComponent } from './Navbar';
import Footer from './Footer';
import enterteinment from '../assets/enterteinment.png';
import rental from '../assets/rental.png';
import lighting from '../assets/lighting.png';
import liveSound from '../assets/liveSound.png';
import stage from '../assets/stage.png';
import video from '../assets/video.png';

const imageMap = {
  "Staging": stage,
  "Entertainment": enterteinment,
  "Video": video,
  "Lighting": lighting,
  "Equipment Rental": rental,
  "Live Sound": liveSound
};

const ServiceComponent = () => {
    const { title, descriptions } = useParams(); // Destructure parameters
    const image = imageMap[title]; // Obtener la imagen correspondiente al título
    console.log(title, image, descriptions);

    return (
        <div className='h-screen w-screen'>
          <NavbarComponent />
          <div className="flex justify-center items-center pb-8 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg items-center md:px-8">     
              <img className="mx-auto w-[115%] h-auto md:max-w-none" src={image} alt={title} />     
              <div className="px-32 flex flex-col justify-between">
                <div className="mb-8 md:mt-8">
                  <h2 className="text-4xl inline-block border-b-[1px]" style={{ fontFamily: 'montserrat' }}>{title}</h2>
                </div>
                {/* {descriptions.map((description, index) => (
                  <h2 key={index}>- {description}</h2>
                ))} */}
                {/* <Link to={`/services/${serviceId}`} className="text-blue-500">See Details</Link> */}
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

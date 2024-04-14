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

const descriptions = {
  "Live Sound": [
    "Unleash the Power of Sound Experience Unforgettable Events with Paradiso Music's Top-Notch Engineering Team.",
    "Live Sound Reinforcement.",
    "Sound Design and Mixing.",
    "Live Recording Mixing and Mastering."
  ],
  "Lighting": [
    "Stage and Event Lighting Design",
    "Transforming spaces with captivating lighting designs, elevating the ambiance and energy of staging designs that captivate and inspire."
  ],
  "Staging": [
    "Staging designs that captivate and inspire.",
    "From sleek and simple to grand and elaborate. From backyard shows to pool parties and everything in between. Our expert team can help you cover all your needs."
  ],
  "EquipmentRental": [
    "Amplify your event's impact with our top-quality audio, video and lighting equipment rentals.",
    "From microphones to video LED screens. Let us guide you in finding what your event needs, reliable and professional solutions for every occasion."
  ],
  "Entertainment": [
    "Connecting you with the best entertainment for your event!",
    "Performers, dancers, solo artists, full band productions, we book top talent to bring your vision to life and leave your audience in awe."
  ],
  "Video": [
    "Movie night at the park? Wedding reception? DJ bloc party?",
    "Dynamic visuals come alive with our LED screens and projectors, high-resolution displays and crisp image projections."
  ],
  "Recording": [
    "Dedicated to developing and fine-tune artists skills.",
    "We offer top-of-the-line equipment and a team of dedicated engineers.",
    "Services include recording, mixing, and mastering for any musical genre."
  ],
  "Audiovisual": [
    "Our audiovisual studios produce engaging audio and video content for various platforms.",
    "From recording and editing to post-production for podcast, social media, TV and film.",
    "Our expert production team ensures a polished and engaging audiovisual experience that resonates with your audience."
  ]
};

const ServiceComponent = () => {
    const { title } = useParams(); 
    const image = imageMap[title]; 
    return (
        <div className='h-screen w-screen flex flex-col'>
          <NavbarComponent />
          <div className="flex-1 bg-black">
            <div className="container mx-auto py-8 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img className="mx-auto w-full max-w-full md:max-w-none" src={image} alt={title} />
                <div className="text-white">
                  <h2 className="text-4xl mb-4 border-b-2 border-white font-montserrat">{title}</h2>
                  <ul className="list-disc pl-6">
                    {descriptions[title].map((description, index) => (
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

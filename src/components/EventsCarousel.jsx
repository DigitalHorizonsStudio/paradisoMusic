import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component from react-bootstrap
import './Carousel.css';

import colleCrowd from '../assets/events-slide/colleCrowd.jpg';
import collektives from '../assets/events-slide/collektives.jpg';
import flamingo from '../assets/events-slide/flamingo.jpg';
import coral from '../assets/events-slide/coral.jpg';
import diablos from '../assets/events-slide/diablos.jpg';
import female from '../assets/events-slide/female.jpg';
import first from '../assets/events-slide/first.jpg';
import flamingotheather from '../assets/events-slide/flamingotheather.jpg';
import funky from '../assets/events-slide/funky.jpg';
import inter from '../assets/events-slide/inter.jpg';
import interStadium from '../assets/events-slide/interStadium.jpg';
import interstadium2 from '../assets/events-slide/interstadium2.jpg';
import beachceremony from '../assets/events-slide/BEACH_CEREMONY.jpg';
import stageside from '../assets/events-slide/STAGE-SIDE-ISLAMORADA-.jpg';
import weddingmorada from '../assets/events-slide/WEDDING_ISLAMORADA.jpg';
import weddingstage from '../assets/events-slide/WEDDING_STAGE.jpg';

const slides = [
  { src: first, title: "First Dance Islamorada" },
  { src: beachceremony , title: "Beach Ceremony" },
  { src: colleCrowd, title: "Collektives Crowd" },
  { src: stageside, title: "Stage Side Isla Morada" },
  { src: collektives, title: "Collektives B&W" },
  { src: weddingmorada, title: "Wedding Isla Morada" },
  { src: flamingo, title: "Flamingo MCL7" },
  { src: weddingstage, title: "Wedding Stage" },
  { src: coral, title: "Coral Gables Food N Wine Fest" },
  { src: diablos, title: "Diablos" },
  { src: female, title: "Female Singer" },
  { src: flamingotheather, title: "Flamingo Teather" },
  { src: funky, title: "Funky Pickle" },
  { src: inter, title: "Inter Miami Stadium Solsis" },
  { src: interStadium, title: "Inter Miami Stadium" },
  { src: interstadium2, title: "Inter Stadium" },
];

export const EventsCarousel = () => {

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = slides.length;

  const handleImageLoad = () => {
    setImagesLoaded(prevState => prevState + 1);
  };

  return (
    <div>
      {imagesLoaded < totalImages && (
        <div className="loader-spinner">
        <Spinner animation="border" role="status" className="custom-spinner">
        </Spinner>
        </div>
      )}
      <Carousel data-bs-theme="dark" fade={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="img-container">
              <img
                className="img-carousel"
                src={slide.src}
                alt={`Slide ${index + 1}`}
                onLoad={handleImageLoad}
              />
            </div>
            <Carousel.Caption>
              <h5>{slide.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
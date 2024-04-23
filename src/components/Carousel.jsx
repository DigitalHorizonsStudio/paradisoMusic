import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

import bandLive from '../assets/slide/bandLive.jpg';
import beachParty from '../assets/slide/beachParty.jpg';
import flamingo from '../assets/slide/flamingo.jpg';
import foundrising from '../assets/slide/foundrising.jpg';
import hardRock from '../assets/slide/hardRock.jpg';
import sound from '../assets/slide/sound.jpg';
import tech from '../assets/slide/tech.jpg';
import vallenato from '../assets/slide/vallenato.jpg';
import wedding from '../assets/slide/wedding.jpg';
import zeyzey from '../assets/slide/zeyzey.jpg';

const slides = [
  { src: hardRock, title: "Live Band at Hard Rock Hotel, Hollywood Florida" },
  { src: flamingo, title: "Flamingo Teather Brickel" },
  { src: beachParty, title: "Beach Party at Florida Keys" },
  { src: wedding, title: "Wedding at Cheeca Lodge Resort Islamorada Florida Keys" },
  { src: foundrising, title: "Foundraising Fashion Event at Rusty Pelican at Key Biscayne Florida" },
  { src: sound, title: "Saastr Tech Conference at Veza Sur, Wynwood Miami" },
  { src: tech, title: "Sound & Lighting Production in Miami Event Venue" },
  { src: vallenato, title: "Vallenato Fest at Magic 13 Brewery Miami FL" },
  { src: bandLive, title: "Band Live" },
  { src: zeyzey, title: "Live Band at Zey Zey Event Venue at Little River Miami Florida" }
];


export const CarouselPhotos = () => {
  return (
    <Carousel data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="img-container">
            <img
              className="img-carousel"
              src={slide.src}
              alt={`Slide ${index + 1}`}
            />
          </div>
          <Carousel.Caption>
            <h5>{slide.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

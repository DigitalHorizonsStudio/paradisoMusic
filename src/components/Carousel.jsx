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
  { src: beachParty, title: "Wedding reception, Islamorada, Florida Keys." },
  { src: hardRock, title: "Live band at Hard Rock Hotel, Hollywood, FL." },
  { src: flamingo, title: "Flamingo Theater Brickell, Miami." },
  { src: foundrising, title: "Fundraising fashion event at Rusty Pelican, Key Biscayne, FL." },
  { src: sound, title: "Live Band, Miami, Florida." },
  { src: tech, title: "Live Band, Miami, Florida." },
  { src: vallenato, title: "Vallenato festival, Magic 13, Miami, FL." },
  { src: bandLive, title: "Live band, Ft Lauderdale, FL." },
  { src: zeyzey, title: "Experimento live at Zey Zey, Little River, Miami." }
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
              loading='lazy'
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

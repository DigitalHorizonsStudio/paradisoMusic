import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

import behringer from '../assets/events-slide/behringer.jpg';
import colleCrowd from '../assets/events-slide/colleCrowd.jpg';
import collektives from '../assets/events-slide/collektives.jpg';
import confetti from '../assets/events-slide/confetti.jpg';
import desfile from '../assets/events-slide/desfile.jpg';
import flamingo from '../assets/events-slide/flamingo.jpg';
import confettiband from '../assets/events-slide/confettiband.jpg';
import coral from '../assets/events-slide/coral.jpg';
import diablos from '../assets/events-slide/diablos.jpg';
import female from '../assets/events-slide/female.jpg';
import first from '../assets/events-slide/first.jpg';
import flamingotheather from '../assets/events-slide/flamingotheather.jpg';
import funky from '../assets/events-slide/funky.jpg';
import inter from '../assets/events-slide/inter.jpg';
import interStadium from '../assets/events-slide/interStadium.jpg';
import interstadium2 from '../assets/events-slide/interstadium2.jpg';

const slides = [
  { src: behringer, title: "Behringer X32 Producer" },
  { src: colleCrowd, title: "Collektives Crowd" },
  { src: collektives, title: "Collektives B&W" },
  { src: confetti, title: "Confetti Zeke" },
  { src: desfile, title: "Desfile Fundacion Sur" },
  { src: flamingo, title: "Flamingo MCL7" },
  { src: confettiband, title: "Food N Wine Fest Confetti Band" },
  { src: coral, title: "Coral Gables Food N Wine Fest" },
  { src: diablos, title: "Diablos" },
  { src: female, title: "Female Singer" },
  { src: first, title: "First Dance Islamorada" },
  { src: flamingotheather, title: "Flamingo Teather" },
  { src: funky, title: "Funky Pickle" },
  { src: inter, title: "Inter Miami Stadium Solsis" },
  { src: interStadium, title: "Inter Miami Stadium" },
  { src: interstadium2, title: "Inter Stadium" },
];

export const EventsCarousel = () => {
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

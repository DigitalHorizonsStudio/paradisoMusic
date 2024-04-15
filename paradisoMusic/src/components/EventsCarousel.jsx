import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/events-slide/band-live.png';
import slide2 from '../assets/events-slide/beach-ceremony.png'
import slide3 from '../assets/events-slide/crew.png'
import slide4 from '../assets/events-slide/hardrockhotel.png/'
import slide5 from '../assets/events-slide/miami-events.png'
import slide6 from '../assets/events-slide/studio-production.png'
import slide7 from '../assets/events-slide/video-page.png'
import slide8 from '../assets/events-slide/wedding.png'
import slide9 from '../assets/events-slide/zey.png'
import './Carousel.css';

export const EventsCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide1}
            alt="First slide"
          />
        </div>
      
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide2}
            alt="Second slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide3}
            alt="Third slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide4}
            alt="fourth slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide5}
            alt="fifth slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide6}
            alt="Sixth slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide7}
            alt="Seventh slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide8}
            alt="eighth slide"
          />
        </div>
   
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="img-carousel"
            src={slide9}
            alt="ninth slide"
          />
        </div>
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

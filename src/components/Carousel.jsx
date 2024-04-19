import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide/bandLive.png';
import slide2 from '../assets/slide/bandLive2.png';
import slide3 from '../assets/slide/vallenato.png';
import './Carousel.css';

export const CarouselPhotos = () => {
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
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

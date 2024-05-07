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
import beachW from '../assets/events-slide/BEACH-WEDDING.jpg';
import confetiB from '../assets/events-slide/CONFETTI-BAND.jpg';
import confetiZ from '../assets/events-slide/CONFETTI-ZEKE.jpg';
import crew from '../assets/events-slide/CREW.jpg';
import desfileFundacion from '../assets/events-slide/DESFILE-FUNDACION-SUR.jpg';
import grazianos from '../assets/events-slide/GRAZIANOS-STREET-PARTY.jpg';
import lesli from '../assets/events-slide/LESLIE-CARTAYA.jpg';
import live1 from '../assets/events-slide/live.jpg';
import live2 from '../assets/events-slide/live2.jpg';
import paradisoB from '../assets/events-slide/PARADISO-BACK.jpg';
import pulga from '../assets/events-slide/PULGA-MULATO.jpg';
import rasta from '../assets/events-slide/RASTA-FEST.jpg';
import socialM from '../assets/events-slide/SOCIAL-MONDAY-PODCAST.jpg';
import stageC from '../assets/events-slide/STAGE-COVER.jpg';
import studioP from '../assets/events-slide/STUDIO-PRODUCTION.jpg';
import xperimento from '../assets/events-slide/XPERIMENTO-ZEY-ZEY.jpg';


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
  { src: beachW, title: "Beach Wedding" },
  { src: confetiB, title: "Confetti Band" },
  { src: confetiZ, title: "Confetti Zeke" },
  { src: crew, title: "Crew" },
  { src: desfileFundacion, title: "Desfile Fundacion Sur" },
  { src: grazianos, title: "Grazianos Street Party" },
  { src: lesli, title: "Leslie Cartaya" },
  { src: live1, title: "Live Performance" },
  { src: live2, title: "Live Performance" },
  { src: paradisoB, title: "Paradiso Back" },
  { src: pulga, title: "Pulga & Mulato" },
  { src: rasta, title: "Rasta Fest" },
  { src: socialM, title: "Social Monday Podcast" },
  { src: stageC, title: "Stage Cover" },
  { src: studioP, title: "Studio Production" },
  { src: xperimento, title: "Xperimento Zey Zey" },
];

export const EventsCarousel = () => {

  const totalImages = slides.length;

  return (
    <div>
      <Carousel style={{backgroundColor: '#110A0C'}} data-bs-theme="dark" fade={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="evts-carousel py-10">
              <img
                className="evts-carousel"
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
    </div>
  );
};
import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import { CarouselPhotos } from '../components/Carousel'
import { Services } from '../components/Services'
import { Form } from '../components/Form'
import HomeSlider from '../components/Partners'
import Footer from '../components/Footer'
import { CarouselPartners } from '../components/PartnersCarousel'


export const Landing = () => {
  return (
      <div>
        <NavbarComponent />
        <div className="">
        <CarouselPhotos />
        </div>
        <Services />
        <div className="d-block d-sm-none">
        <CarouselPartners />
        </div>
        <div className="d-none d-sm-block">
        <HomeSlider />
        </div>
        <Form />
        <Footer />
      </div>
    )
}

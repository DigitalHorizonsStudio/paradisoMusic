import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import { CarouselPhotos } from '../components/Carousel'
import { Services } from '../components/Services'
import { Form } from '../components/Form'
import HomeSlider from '../components/Partners'
import Footer from '../components/Footer'


export const Landing = () => {
  return (
      <div>
        <NavbarComponent />
        <div className="border-t border-zinc-700">
        <CarouselPhotos />
        </div>
        <Services />
        <HomeSlider />
        <Form />
        <Footer />
      </div>
    )
}

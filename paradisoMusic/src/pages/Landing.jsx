import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import { CarouselPhotos } from '../components/Carousel'
import { Services } from '../components/Services'
import { Form } from '../components/Form'
import HomeSlider from '../components/Partners'
import Footer from '../components/Footer'


export const Landing = () => {
  return (
      <div style={{ backgroundColor: 'black', padding: '0 10vw'}}>
          <div style={{display:'flex',flexDirection:'column', width: '100%',}}>
        <NavbarComponent />
        <CarouselPhotos />
        <Services />
        <HomeSlider />
        <Form />
        <Footer />
        </div>
      </div>
    )
}

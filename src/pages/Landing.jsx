import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import { CarouselPhotos } from '../components/Carousel'
import { Services } from '../components/Services'
import { Form } from '../components/Form'
import HomeSlider from '../components/Partners'
import Footer from '../components/Footer'


export const Landing = () => {
  return (
      <div style={{ backgroundColor: 'black'}}>
          <div className="border-b border-l border-t border-r border-zinc-700" style={{display:'flex',flexDirection:'column', width: '100%',}}>
        <NavbarComponent />
        <div className="border-t border-zinc-700">
        <CarouselPhotos />
        </div>
        <Services />
        <HomeSlider />
        <Form />
        <Footer />
        </div>
      </div>
    )
}

import React from 'react'
import { NavbarComponent } from './Navbar'
import Footer from './Footer'
import { EventsCarousel } from './EventsCarousel'

export const Events = () => {
  return (
    <div className='h-screen flex flex-col justify-between'style={{ backgroundColor: 'black', padding: '0 10vw'}}>
    <NavbarComponent />
    < EventsCarousel/>
    <Footer />
    </div>
  )
}

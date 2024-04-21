import React from 'react'
import { NavbarComponent } from './Navbar'
import Footer from './Footer'
import { EventsCarousel } from './EventsCarousel'

export const Events = () => {
  return (
    <div>
    <NavbarComponent />
    < EventsCarousel/>
    <Footer />
    </div>
  )
}

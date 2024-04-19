import React from 'react'
import { NavbarComponent } from './Navbar'
import { Services } from './Services'
import Footer from './Footer'

export const ServicesPage = () => {
  return (
    <>
    <div style={{ backgroundColor: 'black', padding: '0 10vw'}}>
    <NavbarComponent />
    <Services />
    <Footer />
    </div>
    </>
  )
}

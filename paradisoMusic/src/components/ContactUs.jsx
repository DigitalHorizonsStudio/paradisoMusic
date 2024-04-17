import React from 'react'
import { NavbarComponent } from './Navbar'
import { Form } from './Form'
import Footer from './Footer'

export const ContactUs = () => {
  return (
    <div className='h-screen flex flex-col ' style={{ backgroundColor: 'black', padding: '0 4vw', paddingBottom: '0' }}>
    <NavbarComponent />
    <Form />
    <Footer />
    </div>
  )
}

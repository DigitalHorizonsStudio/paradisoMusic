import React from 'react'
import { NavbarComponent } from './Navbar'
import { Form } from './Form'
import Footer from './Footer'

export const ContactUs = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
    <NavbarComponent />
    <Form />
    <Footer />
    </div>
  )
}

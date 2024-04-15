import React from 'react';
import { NavbarComponent } from './Navbar';
import Footer from './Footer';
import aboutUsImage from '../assets/aboutUs.jpeg';

const aboutUsDescription = [
  "We are a team of dedicated Event Producers, Audio Engineers and Artists.",
  "Our extensive background as musicians and our technical knowledge bring a unique blend of expertise and artistic expression to our work.",
  "We strive to bring your vision to life and create an unforgettable sonic and visual experience to your event.",
  "Our history:",
  "We met in the early 2000s as musicians playing in a band. We became friends and have been in the Miami local scene ever since.",
  "Along the years we developed a passion and expertise for event production, improved our technical skills, recorded and mixed musical productions, and performed in international events.",
  "Our desire to support and uplift the quality of our surrounding musical movement turned into a company that today endures and supports the performing scene, that is Paradiso Music Pro."
];

export const AboutUs = () => {
  return (
    <div className='h-screen flex flex-col'>
    <NavbarComponent />
    <div className="flex-1 bg-[#110A0C] border-b border-gray-500">
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img className="mx-auto w-full max-w-full md:max-w-none" src={aboutUsImage} alt="About Us" />
          <div className="text-white">
            <h2 className="text-5xl mb-4 inline-block border-b-[1px] border-white font-montserrat ">About Us</h2>
            <ul className="list-disc pl-6">
              {aboutUsDescription.map((description, index) => (
                <li key={index} className="mb-2">{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

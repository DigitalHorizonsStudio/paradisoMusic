import React from 'react';
import { NavbarComponent } from './Navbar';
import Footer from './Footer';
import aboutUsImage from '../assets/aboutUs.jpeg';
import { useTranslation } from 'react-i18next';


export const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <div>
    <NavbarComponent />
    <div className="flex-1 bg-[#110A0C] border-b border-zinc-700">
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img className="mx-auto w-full max-w-full md:max-w-none" src={aboutUsImage} alt="About Us" />
          <div className="text-white">
            <h2 className="text-5xl mb-4 inline-block border-b-[1px] border-white font-montserrat ">{t('nav.about')}</h2>
            <ul className="">
                {t('aboutUs.Description', { returnObjects: true }).map((description, index) => (
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

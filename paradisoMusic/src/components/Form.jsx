import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useTranslation } from 'react-i18next';

const MySwal = withReactContent(Swal);

export const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    to_email: '',
    to_phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); 
  const { t } = useTranslation();
  
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm('service_hzsgp6l', 'template_sewlpmn', form.current, {
        publicKey: 'YjKPkpMXSw2Jjnf2Z'
      })
      .then(
        () => {
          MySwal.fire({
            icon: 'success',
            title: <p>{t('successMessage')}</p>,
            showConfirmButton: true,
            confirmButtonText: t('submitButton')
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <div className="md:flex-row items-center justify-center container py-20 flex flex-col xl:flex-row items-center justify-between">
      <div className="w-full md:w-2/5 md:mr-20 mb-8 md:mb-0">
        <h2 className="md:text-6xl text-3xl font-semibold mb-4">
          {t('form.title')}
          <span className="before:block before:absolute before:-inset-0 before:bg-pink-500 relative inline-block ml-1 mr-1">
            <span className="relative text-white">{t('form.productionExperts')}</span>
          </span>
          {t('form.eventToLife')}
        </h2>
      </div>

      <form onSubmit={sendEmail} ref={form} className="w-full md:w-2/4 md:pr-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium text-gray-700 mb-2">
              {t('form.name')}
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-gray-700 mb-2">
              {t('form.email')}
            </label>
            <input
              type="email"
              id="to_email"
              name="to_email"
              className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.to_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-medium text-gray-700 mb-2">
              {t('form.phoneNumber')}
            </label>
            <input
              type="tel"
              name="to_phone"
              id="to_phone"
              className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.to_phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="service" className="font-medium text-gray-700 mb-2">
              {t('form.service')}
            </label>
            <select
              id="message"
              name="message"
              className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.message}
              onChange={handleChange}
              required
            >
              <option value="">{t('form.selectService')}</option>
              <option value="staging">{t('form.staging')}</option>
              <option value="entertainment">{t('form.entertainment')}</option>
              <option value="video">{t('form.video')}</option>
              <option value="lighting">{t('form.lighting')}</option>
              <option value="equipmentRental">{t('form.equipmentRental')}</option>
              <option value="liveSound">{t('form.liveSound')}</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-12 px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 mt-4"
          disabled={loading} 
        >
          {loading ? t('form.sending') : t('form.submitButton')}
        </button>
      </form>
      {loading && (
        <div className="loader absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-300">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};


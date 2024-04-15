import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translate.json'
import translationES from '../locales/es/translate.json'

i18n
  .use(initReactI18next) // Usa react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // Establece las traducciones para el inglés
      },
      es: {
        translation: translationES, // Establece las traducciones para el español
      },
    },
    lng: 'en', // Establece el idioma inicial
    fallbackLng: 'en', // Establece el idioma de respaldo
    interpolation: {
      escapeValue: false, // No escapa los valores
    },
  });

export default i18n;
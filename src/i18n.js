import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationSV from './locales/sv.json';
import translationNL from './locales/nl.json';

const resources = {
  en: {
    translation: translationEN
  },
  sv: {
    translation: translationSV
  },
  nl: {
    translation: translationNL
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sv', // Set Swedish as the default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_es from '../data/translations/es/global.json';
import global_en from '../data/translations/en/global.json';

i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      }
    }
  });

export default i18n;

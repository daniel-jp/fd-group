import i18n from 'i18next';
import {Export} from 'phosphor-react';
import {initReactI18next} from 'react-i18next';

import enJoson from '../i18n/translation/en.json';
import frJoson from '../i18n/translation/fr.json';
import ptJoson from '../i18n/translation/pt.json';

i18n.use(initReactI18next).init({

  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },

  resources: {
    en: enJoson,
    pt: ptJoson,
    fr: frJoson,


  }
})

export default i18n;

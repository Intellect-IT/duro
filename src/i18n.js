import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'sr',
  supportedLngs: ['sr', 'en'],
  debug: true,
  lng: "sr",
  detection: {
    order: ['path', 'queryString', 'cookie'],
    cache: ['cookie'],
    lookupFromPathIndex: 0,
    checkWhitelist: true
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n
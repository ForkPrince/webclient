import { createI18n } from "vue-i18n";

import en from './locales/en.json';
import it from './locales/it.json';
import ko from './locales/ko.json';

const userLocale = navigator.language.split('-')[0];
const supportedLocales = ['en', 'it', 'ko'];
const fallbackLocale = 'en';
const locale = supportedLocales.includes(userLocale) ? userLocale : fallbackLocale;

const i18n = createI18n({
  legacy: false,
  locale: locale,
  globalInjection: true,
  messages: {
    en: en,
    it: it,
    ko: ko
  },
});

export function useT(){
    return i18n.global;
}

export default i18n;
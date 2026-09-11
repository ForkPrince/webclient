import { Composer, createI18n } from "vue-i18n";

import en from './locales/en_US.json';
import it from './locales/it_IT.json';
import ko from './locales/ko.json';
import { useCookies } from "@vueuse/integrations/useCookies";

export const supportedLocales = ['en_US', 'it_IT', 'ko'];
const fallbackLocale = 'en_US';
const cookies = useCookies();

function detectBrowserLocale(): string {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const tag of tags) {
    const normalized = tag.replace('-', '_');
    const exact = supportedLocales.find(l => l === normalized);
    if (exact) return exact;

    const language = normalized.split('_')[0];
    const byLanguage = supportedLocales.find(l => l.split('_')[0] === language);
    if (byLanguage) return byLanguage;
  }

  return fallbackLocale;
}

const locale = detectBrowserLocale();

const i18n = createI18n({
  legacy: false,
  locale: cookies.get('locale') ? cookies.get('locale') : locale,
  fallbackLocale,
  globalInjection: true,
  messages: {
    en_US: en,
    it_IT: it,
    ko: ko
  }
});

export function useT(){
    return i18n.global;
}

export default i18n;
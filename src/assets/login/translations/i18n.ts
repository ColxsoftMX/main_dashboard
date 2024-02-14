// i18n.ts
import esTranslations from './es';
import enTranslations from './en';
import { useState } from 'react';

type Languages = 'es' | 'en';

const languages: Record<Languages, Record<string, string>> = {
  es: esTranslations,
  en: enTranslations,
};

let currentLanguage: Languages = 'es';

const useLanguage = () => {
  const [language, setLanguageState] = useState<Languages>(currentLanguage);

  const setLanguage = (lang: Languages) => {
    if (languages[lang]) {
      currentLanguage = lang;
      setLanguageState(lang);
    }
  };

  const t = (key: string) => {
    return languages[currentLanguage][key] || key;
  };

  return { language, setLanguage, t };
};

export { useLanguage };
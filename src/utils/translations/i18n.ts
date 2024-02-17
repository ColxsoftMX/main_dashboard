import { useEffect, useState } from 'react';

type Languages = 'es' | 'en';

let currentLanguage: Languages = 'es';
//////////////////////////////////////////////////////////////////////////////
import { esTranslationsLogin } from './es';
import { enTranslationsLogin } from './en';

const languagesLogin: Record<Languages, Record<string, string>> = {
  es: esTranslationsLogin,
  en: enTranslationsLogin,
};

const useLanguageLogin = () => {
  const [language, setLanguageState] = useState<Languages>(currentLanguage);

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, []);

  const setLanguage = (lang: Languages) => {
    localStorage.removeItem('language');

    if (languagesLogin[lang]) {
      currentLanguage = lang;
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string) => {
    return languagesLogin[currentLanguage][key] || key;
  };

  return { language, setLanguage, t };
};

//////////////////////////////////////////////////////////////////////////////
import { esTranslationsHeader } from './es';
import { enTranslationsHeader } from './en';

const languagesHeader: Record<Languages, Record<string, string>> = {
  es: esTranslationsHeader,
  en: enTranslationsHeader,
};

const LocalstorageLanguage = localStorage.getItem('language')

console.log(LocalstorageLanguage)

const useLanguageHeader = () => {
  const [language, setLanguageState] = useState<Languages>(LocalstorageLanguage as Languages);

  const setLanguage = (lang: Languages) => {
    localStorage.removeItem('language');

    if (languagesHeader[lang]) {
      currentLanguage = lang;
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string) => {
    return languagesHeader[currentLanguage][key] || key;
  };

  return { language, setLanguage, t };
};

//////////////////////////////////////////////////////////////////////////////
import { esTranslationsDashboard } from './es';
import { enTranslationsDashboard } from './en';

const languagesDashboard: Record<Languages, Record<string, string>> = {
  es: esTranslationsDashboard,
  en: enTranslationsDashboard,
};

const useLanguageDashboard = () => {
  const [language, setLanguageState] = useState<Languages>(currentLanguage);

  const setLanguage = (lang: Languages) => {
    localStorage.removeItem('language');

    if (languagesDashboard[lang]) {
      currentLanguage = lang;
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string) => {
    return languagesDashboard[currentLanguage][key] || key;
  };

  return { language, setLanguage, t };
};

export { useLanguageLogin, useLanguageHeader, useLanguageDashboard };
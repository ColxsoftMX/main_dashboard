import { useEffect, useState } from 'react';

type Languages = 'es' | 'en';

// let currentLanguage: Languages = 'es';

let currentLanguage: Languages = (localStorage.getItem('language') as Languages) || 'es';

const useLanguage = (translations: Record<Languages, Record<string, string>>) => {
  const [language, setLanguageState] = useState<Languages>(currentLanguage);

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, []);

  const setLanguage = (lang: Languages) => {
    localStorage.removeItem('language');

    if (translations[lang]) {
      currentLanguage = lang;
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string) => {
    return translations[currentLanguage][key] || key;
  };

  return { language, setLanguage, t };
};

export { useLanguage };

import {
  esTranslationsLogin, esTranslationsHeader, esTranslationsDashboard, esTranslationsInvitations, esTranslationsUsers,
  esTranslationsCreateUser, esTranslateManageUsers,
} from './es';

import {
  enTranslationsLogin, enTranslationsHeader, enTranslationsDashboard, enTranslationsInvitations, enTranslatiosnUsers,
  enTranslationsCreateUser, enTranslationsManageUsers,
} from './en';

const languagesLogin: Record<Languages, Record<string, string>> = {
  es: esTranslationsLogin,
  en: enTranslationsLogin,
};

const languagesHeader: Record<Languages, Record<string, string>> = {
  es: esTranslationsHeader,
  en: enTranslationsHeader,
};

const languagesDashboard: Record<Languages, Record<string, string>> = {
  es: esTranslationsDashboard,
  en: enTranslationsDashboard,
};

const languagesInvitations: Record<Languages, Record<string, string>> = {
  es: esTranslationsInvitations,
  en: enTranslationsInvitations,
};

const languagesUsers: Record<Languages, Record<string, string>> = {
  es: esTranslationsUsers,
  en: enTranslatiosnUsers,
};

const languagesCreateUser: Record<Languages, Record<string, string>> = {
  es: esTranslationsCreateUser,
  en: enTranslationsCreateUser,
};

const languagesManageUsers: Record<Languages, Record<string, string>> = {
  es: esTranslateManageUsers,
  en: enTranslationsManageUsers,
};

export const useLanguageLogin = () => useLanguage(languagesLogin);
export const useLanguageHeader = () => useLanguage(languagesHeader);
export const useLanguageDashboard = () => useLanguage(languagesDashboard);
export const useLanguageInvitations = () => useLanguage(languagesInvitations);
export const useLanguageUsers = () => useLanguage(languagesUsers);
export const useLanguageCreateUser = () => useLanguage(languagesCreateUser);
export const useLanguageManageUsers = () => useLanguage(languagesManageUsers);
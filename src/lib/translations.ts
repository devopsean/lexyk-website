import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import pt from '../locales/pt.json';
import it from '../locales/it.json';
import de from '../locales/de.json';
import ja from '../locales/ja.json';

export type Locale = 'en' | 'es' | 'fr' | 'pt' | 'it' | 'de' | 'ja';

export const locales: Locale[] = ['en', 'es', 'fr', 'pt', 'it', 'de', 'ja'];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  it: 'Italiano',
  de: 'Deutsch',
  ja: '日本語',
};

const translations = {
  en,
  es,
  fr,
  pt,
  it,
  de,
  ja,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getNestedTranslation(obj: Record<string, unknown>, path: string): string {
  const value = path.split('.').reduce<unknown>((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  
  return typeof value === 'string' ? value : path;
}

export function useTranslation(locale: Locale) {
  const t = (key: string): string => {
    const trans = getTranslations(locale);
    return getNestedTranslation(trans, key);
  };

  return { t, locale, translations: getTranslations(locale) };
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0] as Locale;
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}


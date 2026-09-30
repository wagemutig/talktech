import { en } from './en.mjs';
import { de } from './de.mjs';

export const translations = { en, de };

export function useTranslations(locale) {
  return translations[locale] || translations.en;
}
import it from './attraction-content/it.json';
import en from './attraction-content/en.json';
import fr from './attraction-content/fr.json';
import zh from './attraction-content/zh-Hant.json';
import { routing, type Locale } from '@/i18n/routing';

export type AttractionContent = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  intro: string;
  advice: string[];
  highlights: string[];
  about: string;
  facts: {label: string; value: string}[];
  hours: string;
  prices: string;
  transport: string[];
  charm: {title: string; text: string}[];
  route: string[];
  notice: string[];
  photos: {title: string; text: string}[];
  stay: string;
  reviewNote: string;
  mapQuery: string;
  sources: {title: string; url: string}[];
};

export const attractionSlugs = ['pino-pascali', 'cala-paura', 'arco-marchesale', 'santa-maria-assunta'] as const;
export const siteUrl = 'https://www.modugnostatue.com';
export const checkedDate = '2026-11-10';
const content: Record<Locale, AttractionContent[]> = {it, en, fr, 'zh-Hant': zh};
export function getAttractions(locale: Locale) { return content[locale]; }
export function getAttraction(locale: string, slug: string) {
  if (!routing.locales.includes(locale as Locale)) return undefined;
  return content[locale as Locale].find(item => item.slug === slug);
}
export function attractionPath(locale: Locale, slug: string) {
  return `${locale === 'it' ? '' : `/${locale}`}/attractions/${slug}`;
}
export function mapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

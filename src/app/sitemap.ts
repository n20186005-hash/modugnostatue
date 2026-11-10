import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { attractionPath, attractionSlugs, siteUrl } from '@/data/nearby-attractions';

export default function sitemap(): MetadataRoute.Sitemap {
  // Include only URLs whose self-canonical metadata is verified. Existing blog
  // metadata is outside this change and currently inherits the homepage URL.
  const homepages = routing.locales.map(locale => ({url:`${siteUrl}${locale === 'it' ? '/' : `/${locale}`}`}));
  const attractions = attractionSlugs.flatMap(slug => routing.locales.map(locale => ({
    url:`${siteUrl}${attractionPath(locale, slug)}`,
    alternates:{languages:{
      ...Object.fromEntries(routing.locales.map(l => [l,`${siteUrl}${attractionPath(l, slug)}`])),
      'x-default':`${siteUrl}${attractionPath('it', slug)}`,
    }},
  })));
  return [...homepages, ...attractions];
}

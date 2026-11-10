import { useLocale } from 'next-intl';
import { attractionPath, getAttractions } from '@/data/nearby-attractions';
import { guideLabels } from '@/data/attraction-labels';
import type { Locale } from '@/i18n/routing';
import Link from 'next/link';

export default function NearbyAttractions() {
  const locale = useLocale() as Locale;
  const labels = guideLabels[locale];
  return <section className="section-padding" id="nearby-guides">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">{labels.nearby}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {getAttractions(locale).map(item => <Link key={item.slug} href={attractionPath(locale, item.slug)} className="rounded-xl border p-6 block hover:shadow-md" style={{borderColor:'var(--border-color)', background:'var(--card-bg)'}}>
          <h3 className="font-display text-xl font-semibold mb-3">{item.name}</h3>
          <p className="text-sm leading-relaxed mb-5" style={{color:'var(--text-secondary)'}}>{item.subtitle}</p>
          <span className="text-sm font-semibold" style={{color:'var(--accent)'}}>{labels.read} →</span>
        </Link>)}
      </div>
    </div>
  </section>;
}

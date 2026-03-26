import { useTranslations } from 'next-intl';

export default function Sources() {
  const t = useTranslations('sources');

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-2xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('text')}
        </p>

        <ul className="space-y-3">
          {(['googleMaps', 'unsplash', 'wikipedia'] as const).map((key) => (
            <li key={key} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

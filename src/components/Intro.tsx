import { useTranslations } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const items: string[] = t.raw('highlights.items');

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        <div
          className="rounded-xl p-6 sm:p-8"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <h3
            className="font-display text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('highlights.title')}
          </h3>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

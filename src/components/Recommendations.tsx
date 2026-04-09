import { useTranslations, useMessages } from 'next-intl';

export default function Recommendations() {
  const t = useTranslations('recommendations');
  const messages = useMessages() as any;
  const attractions = (messages?.recommendations?.attractions || []) as Array<{ name: string; url: string }>;
  const tours = (messages?.recommendations?.tours || []) as Array<{ name: string; url: string }>;

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        {/* Trip.com Ads */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="w-full max-w-[728px] overflow-hidden rounded-lg shadow-sm bg-white dark:bg-gray-800 flex justify-center">
            <iframe
              src="https://www.trip.com/partners/ad/SB15306342?Allianceid=7974128&SID=300882170&trip_sub1=%E5%B7%B4%E9%87%8C%E5%BB%A3%E5%9F%9F%E5%B8%82"
              style={{ width: '728px', height: '90px', border: 'none' }}
              scrolling="no"
              id="SB15306342"
              title="Trip.com Ad 1"
            />
          </div>
          <div className="w-full max-w-[728px] overflow-hidden rounded-lg shadow-sm bg-white dark:bg-gray-800 flex justify-center">
            <iframe
              src="https://www.trip.com/partners/ad/SB15306370?Allianceid=7974128&SID=300882170&trip_sub1=%E6%BF%B1%E6%B5%B7%E6%B3%A2%E5%88%A9%E5%B0%BC%E4%BA%9E%E8%AB%BE"
              style={{ width: '728px', height: '90px', border: 'none' }}
              scrolling="no"
              id="SB15306370"
              title="Trip.com Ad 2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Nearby Attractions */}
          <div className="bg-white dark:bg-[#162d44] p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-[#1e3a54]">
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t('attractionsTitle')}
            </h3>
            <ul className="space-y-3">
              {attractions.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 hover:text-blue-600 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="group-hover:underline underline-offset-4 decoration-blue-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Tours */}
          <div className="bg-white dark:bg-[#162d44] p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-[#1e3a54]">
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
              </svg>
              {t('toursTitle')}
            </h3>
            <ul className="space-y-3">
              {tours.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 hover:text-blue-600 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="group-hover:underline underline-offset-4 decoration-blue-300 leading-snug">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
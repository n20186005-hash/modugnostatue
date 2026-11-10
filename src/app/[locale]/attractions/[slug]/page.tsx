import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { routing, type Locale } from '@/i18n/routing';
import { attractionPath, attractionSlugs, checkedDate, getAttraction, getAttractions, mapUrl, siteUrl } from '@/data/nearby-attractions';
import { guideLabels } from '@/data/attraction-labels';
import styles from './page.module.css';

type Props = { params: Promise<{ locale: string; slug: string }> };
// OpenNext can miss prerender cache entries for direct locale-prefixed URLs.
// Allow rendering valid content on a cache miss; getAttraction still rejects
// every unknown locale or slug with notFound().
export const dynamicParams = true;
export function generateStaticParams() {
  return routing.locales.flatMap(locale => attractionSlugs.map(slug => ({locale, slug})));
}
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const item = getAttraction(locale, slug);
  if (!item) notFound();
  const canonical = `${siteUrl}${attractionPath(locale as Locale, slug)}`;
  return {
    title: `${item.name} | Polignano a Mare | Modugno`,
    description: item.description,
    alternates: {canonical, languages: {
      ...Object.fromEntries(routing.locales.map(l => [l, `${siteUrl}${attractionPath(l, slug)}`])),
      'x-default': `${siteUrl}${attractionPath('it', slug)}`,
    }},
    openGraph: {title:item.name, description:item.description, url:canonical, type:'article', locale:locale === 'zh-Hant' ? 'zh_TW' : locale, siteName:'Modugno'},
  };
}
function List({items}: {items:string[]}) {
  return <ul className={styles.list}>{items.map(text => <li key={text}>{text}</li>)}</ul>;
}
function Title({children}: {children: React.ReactNode}) {return <h2 className={styles.title}>{children}</h2>;}

export default async function AttractionPage({params}: Props) {
  const {locale: rawLocale, slug} = await params;
  const item = getAttraction(rawLocale, slug);
  if (!item) notFound();
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = guideLabels[locale];
  const home = locale === 'it' ? '/' : `/${locale}`;
  const isGate = slug === 'arco-marchesale';
  const isBeach = slug === 'cala-paura';
  const picture = isGate ? 'porta-grande-polignano-a-mare.jpg' : isBeach ? 'lama-monachile-beach-panorama.jpg' : 'polignano-a-mare-historic-street.jpg';
  const pictureLabel = isGate ? t.gate : isBeach ? t.beach : t.street;
  const map = mapUrl(item.mapQuery);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.mapQuery)}`;
  const schema = {
    '@context':'https://schema.org', '@type':'WebPage', name:item.name,
    description:item.description, url:`${siteUrl}${attractionPath(locale, slug)}`, inLanguage:locale,
    about:{'@type':'TouristAttraction', name:item.name, address:{'@type':'PostalAddress', addressLocality:'Polignano a Mare', addressCountry:'IT'}},
    breadcrumb:{'@type':'BreadcrumbList', itemListElement:[
      {'@type':'ListItem', position:1, name:'Modugno', item:`${siteUrl}${home}`},
      {'@type':'ListItem', position:2, name:item.name, item:`${siteUrl}${attractionPath(locale, slug)}`},
    ]},
  };
  return <>
    <Header />
    <main className={styles.guide}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
      <section className={styles.hero}>
        <img className={styles.heroImage} src={`/gallery/${picture}`} alt={pictureLabel} fetchPriority="high" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <nav aria-label={t.home} className={styles.breadcrumb}><Link href={home}>{t.home}</Link><span aria-hidden="true">/</span><span>{t.nearby}</span></nav>
          <p className={styles.eyebrow}>POLIGNANO A MARE · PUGLIA</p>
          <h1>{item.name}</h1>
          <p className={styles.subtitle}>{item.subtitle}</p>
          <div className={styles.heroLinks}><a href={map} target="_blank" rel="noopener noreferrer">{t.mapLink} ↗</a><a href="#explore">{t.explore} ↓</a></div>
          <p className={styles.imageCaption}>{pictureLabel}. {isGate ? t.imageNote : t.context}</p>
        </div>
      </section>
      <nav aria-label={t.contents} className={styles.jumpNav}>
        {[['explore',t.explore],['basics',t.basics],['hours',t.hours],['route',t.route],['map',t.map]].map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className={styles.container}>
        <section id="explore" className={styles.section}>
          <p className={styles.kicker}>{t.independent}</p>
          <Title>{t.explore} · {item.name}</Title><p className={styles.lead}>{item.intro}</p>
          <div className={styles.twoColumns}>
            <div className={styles.panel}><h3>{t.advice}</h3><List items={item.advice}/></div>
            <div className={styles.panel}><h3>{t.highlights}</h3><List items={item.highlights}/></div>
          </div>
          <div className={styles.about}><Title>{t.about}</Title><p>{item.about}</p></div>
        </section>
        <section id="basics" className={styles.section}>
          <Title>{t.basics}</Title>
          <dl className={styles.facts}>{item.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </section>
        <section id="hours" className={styles.section}><Title>{t.hours}</Title><p>{item.hours}</p></section>
        <section id="prices" className={styles.section}><Title>{t.prices}</Title><p>{item.prices}</p><p className={styles.note}>{t.checked}: <time dateTime={checkedDate}>{checkedDate}</time></p></section>
        <section id="transport" className={styles.section}><Title>{t.transport}</Title><List items={item.transport}/><a className={styles.textLink} href="https://www.trenitalia.com/" target="_blank" rel="noopener noreferrer">Trenitalia ↗</a></section>
        <section id="charm" className={styles.section}><Title>{t.charm}</Title><div className={styles.features}>{item.charm.map((feature,i) => <article key={feature.title}><span className={styles.number}>{String(i+1).padStart(2,'0')}</span><div><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div></section>
        <section id="route" className={styles.section}><Title>{t.route}</Title><ol className={styles.route}>{item.route.map((step,i) => <li key={step}><span aria-hidden="true">{i+1}</span><p>{step}</p></li>)}</ol><p className={styles.note}>{t.estimate}</p></section>
        <section id="notice" className={styles.section}><Title>{t.notice}</Title><List items={item.notice}/></section>
        <section id="photography" className={styles.section}><Title>{t.photos}</Title><div className={styles.twoColumns}>{item.photos.map(spot => <article key={spot.title} className={styles.panel}><h3>{spot.title}</h3><p>{spot.text}</p></article>)}</div></section>
        <section id="stay" className={styles.section}><Title>{t.stay}</Title><p>{item.stay}</p></section>
        <section id="reviews" className={styles.section}><Title>{t.reviews}</Title><p>{item.reviewNote}</p><a className={styles.textLink} href={map} target="_blank" rel="noopener noreferrer">{t.reviewLink} ↗</a></section>
        <section id="map" className={styles.section}><Title>{t.map}</Title><p>{item.mapQuery}</p><div className={styles.mapPanel}><span aria-hidden="true">↗</span><div><h3>{item.name}</h3><p>Polignano a Mare · Puglia · Italia</p><a className={styles.textLink} href={directions} target="_blank" rel="noopener noreferrer">{t.routeLink} ↗</a></div></div></section>
        <aside className={styles.section} aria-labelledby="nearby-title"><h2 id="nearby-title" className={styles.title}>{t.nearby}</h2><div className={styles.related}>{getAttractions(locale).filter(other=>other.slug !== slug).map(other=><Link key={other.slug} href={attractionPath(locale,other.slug)}><span>{other.name}</span><span aria-hidden="true">→</span></Link>)}</div><Link className={styles.textLink} href={home}>{t.home} · Monumento a Domenico Modugno</Link></aside>
        <section id="sources" className={`${styles.section} ${styles.sources}`}><Title>{t.sources}</Title><p>{t.checked}: <time dateTime={checkedDate}>{checkedDate}</time></p><ul>{item.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a></li>)}</ul></section>
      </div>
    </main>
    <Footer />
  </>;
}

import json,subprocess,time,os
from pathlib import Path
from urllib.parse import urlparse,quote
import requests
from bs4 import BeautifulSoup

base=os.environ.get('MODUGNO_BASE_URL','http://127.0.0.1:3184').rstrip('/')
site='https://www.modugnostatue.com'
root=Path(__file__).resolve().parent.parent
slugs=['pino-pascali','cala-paura','arco-marchesale','santa-maria-assunta']
locales=['it','en','fr','zh-Hant']
results=[]
def check(condition,message):
 if not condition: raise AssertionError(message)
def path(locale,slug): return ('' if locale=='it' else '/'+locale)+'/attractions/'+slug
for locale in locales:
 content=json.loads((root/'src/data/attraction-content'/f'{locale}.json').read_text())
 for slug in slugs:
  uri=path(locale,slug); response=requests.get(base+uri,timeout=15)
  check(response.status_code==200,f'{uri}: {response.status_code}')
  soup=BeautifulSoup(response.text,'html.parser')
  check(soup.html['lang']==locale,f'{uri} wrong lang')
  check(len(soup.find_all('h1'))==1,f'{uri} H1')
  check(soup.find('link',rel='canonical')['href']==site+uri,f'{uri} canonical')
  alternatives={n['hreflang']:n['href'] for n in soup.find_all('link',hreflang=True)}
  for lang in locales: check(alternatives.get(lang)==site+path(lang,slug),f'{uri} alternate {lang}')
  check(alternatives.get('x-default')==site+path('it',slug),f'{uri} default alternate')
  for section in ['explore','basics','hours','prices','transport','charm','route','notice','photography','stay','reviews','map','sources']:
   check(soup.find(id=section) is not None,f'{uri} missing {section}')
  check(soup.find(id='basics').find_previous('h2').get_text() in ['Informazioni sul luogo','About this place','À propos du lieu','關於景點'],f'{uri} about/basic sequence')
  links={a.get('href') for a in soup.find_all('a')}
  for other in slugs:
   if other!=slug: check(path(locale,other) in links,f'{uri} link to {other}')
  for img in soup.find_all('img'):
   src=img.get('src','')
   if src.startswith('/gallery/'):
    r=requests.get(base+quote(src,safe='/'),timeout=20);check(r.status_code==200,f'image {src}')
  schema=json.loads(soup.find('script',type='application/ld+json').string)
  check(schema['url']==site+uri,f'{uri} schema')
  check('aggregateRating' not in response.text,f'{uri} fabricated rating')
  results.append({'path':uri,'status':200,'h1':soup.h1.get_text(),'checks':'lang, canonical, 5 hreflang, ordered sections, 3 related links, image, JSON-LD'})
for locale in locales:
 uri='/' if locale=='it' else '/'+locale
 r=requests.get(base+uri,timeout=15);check(r.status_code==200,'homepage '+locale)
 links={a.get('href') for a in BeautifulSoup(r.text,'html.parser').find_all('a')}
 check(all(path(locale,s) in links for s in slugs),'homepage links '+locale)
 results.append({'path':uri,'status':r.status_code,'checks':'existing homepage plus four new guide links'})
for uri in ['/it/attractions/pino-pascali','/en/attractions/cala-paura/']:
 r=requests.get(base+uri,timeout=15);check(r.status_code==200 and len(r.history)<4,'redirect '+uri)
 results.append({'path':uri,'status':r.status_code,'redirects':[x.status_code for x in r.history],'final':urlparse(r.url).path})
s=requests.Session();s.get(base+'/fr/attractions/pino-pascali',timeout=15)
r=s.get(base+'/it/attractions/pino-pascali',timeout=15)
check(r.status_code==200 and urlparse(r.url).path=='/attractions/pino-pascali','cookie switch URL')
check(BeautifulSoup(r.text,'html.parser').html['lang']=='it' and s.cookies.get('NEXT_LOCALE')=='it','cookie switch locale')
results.append({'check':'French cookie to explicit Italian route','status':'passed','final':urlparse(r.url).path,'cookie':s.cookies.get('NEXT_LOCALE')})
r=requests.get(base+'/en/attractions/cala-paura?source=qa',headers={'Host':'modugnostatue.com'},allow_redirects=False,timeout=15)
check(r.status_code==308 and r.headers['Location']=='https://www.modugnostatue.com/en/attractions/cala-paura?source=qa','apex redirect')
results.append({'check':'apex redirect preserves path and query','status':r.status_code,'location':r.headers['Location']})
r=requests.get(base+'/en/attractions/cala-paura',headers={'Host':'www.modugnostatue.com','X-Forwarded-Host':'www.modugnostatue.com','X-Forwarded-Proto':'https'},allow_redirects=False,timeout=15)
check(r.status_code==200,'forwarded www');results.append({'check':'www forwarded host','status':r.status_code})
for uri in ['/en/attractions/not-an-attraction','/de/attractions/pino-pascali']:
 r=requests.get(base+uri,timeout=15);check(r.status_code==404,'invalid route '+uri);results.append({'path':uri,'status':404})
r=requests.get(base+'/sitemap.xml',timeout=15);check(r.status_code==200,'sitemap')
soup=BeautifulSoup(r.text,'xml');check(len(soup.find_all('loc'))==20,'sitemap count')
for locale in locales:
 for slug in slugs:check(site+path(locale,slug) in r.text,'sitemap new page')
results.append({'path':'/sitemap.xml','status':200,'self_canonical_urls':20})
r=requests.get(base+'/robots.txt',timeout=15);check(r.status_code==200 and site+'/sitemap.xml' in r.text,'robots')
results.append({'path':'/robots.txt','status':200})
original=subprocess.check_output(['git','ls-tree','-r','HEAD','public'],cwd=root,text=True)
images=[]
for line in original.splitlines():
 meta,name=line.split('\t');sha=meta.split()[2]
 actual=subprocess.check_output(['git','hash-object',name],cwd=root,text=True).strip()
 check(actual==sha,'image changed '+name);images.append({'path':name,'git_blob':sha})
report={'status':'passed','pages':results,'original_images_preserved':images,'browser_interaction':'not covered by this script'}
(root/os.environ.get('MODUGNO_REPORT_PATH','qa/http-results.json')).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'status':'passed','checks':len(results),'original_images_unchanged':len(images)},indent=2))

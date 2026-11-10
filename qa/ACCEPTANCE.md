# Modugno row 13 reconstruction

Status at packaging: LOCAL_REBUILD_TESTED. NOT_DEPLOYED. Browser visual and actual click checks remain unverified.

This is a new reconstruction, not recovered commit 8d2e692f7b80b589b90bd07735bb2b582a453601.
Base: n20186005-hash/modugnostatue main at 2addf19b69454f8fef7939df4c0c91e664349fff.
Scope: Pino Pascali, Cala Paura, Arco Marchesale and Santa Maria Assunta in Italian, English, French and traditional Chinese (16 pages).

## Preserved
All original pages, message content, recommended tour links and 24 image files remain. Image Git blob hashes were checked individually against the base. New hero captions identify actual image subjects. Arco uses its existing Porta Grande photo; other pages explicitly identify contextual imagery rather than mislabeling a different attraction. Original image provenance/licensing remains unverified; no new rights claim is made.

## Implemented
The Luxembourg reference supplied the section structure and visual approach, not facts, reviews or claims. New pages contain a hero, introduction, visiting tips, highlights, about, basic facts, hours, tickets, transport, character, route, visitor notes, photography, accommodation areas, external review link and directions. No invented reviews, ratings, hotels, experience, safety or accessibility promises are added.

Homepage entries, same-language related links, per-page canonical/hreflang, JSON-LD, sitemap and robots are included. Sitemap is limited to 4 self-canonical homepages and 16 verified attraction URLs; pre-existing blog canonical issues are outside this change.

skipMiddlewareUrlNormalize preserves loopback host identity for next-intl rewrites. Switching back to Italian uses the explicit /it route so middleware updates NEXT_LOCALE before removing the prefix.

## Verification
- npm ci: initial reconstruction passed with unchanged dependencies. Preview repair updates and pins Next from 15.5.14 to adapter-supported 15.5.28; npm 10.9.10 clean installs pass for both the root app and isolated preview tooling.
- npx tsc --noEmit: passed.
- npm run build: passed; all 16 attraction pages prerendered.
- git diff --check: passed.
- qa/check-http.py: 29 checks passed against the production build. Includes all 16 pages, 4 homepages, 2 terminating redirect chains, French-to-Italian locale cookie transition, apex path/query redirect, forwarded www host, 2 invalid-route 404s, sitemap and robots. Also checks single H1, language, canonical, 5 hreflang values, About/Basic adjacency, required modules, 3 related links, actual image responses and valid JSON-LD.
- Original images: 24/24 byte-equivalent by Git blob hash.
- npm run lint: did not lint; the existing repository has no ESLint configuration and prompts interactively. No configuration was silently installed.
- Independent code review: sitemap scope finding corrected.
- Independent four-language fact review: Pascali birthplace implications corrected (born Bari, family roots Polignano); Chinese over-65 wording aligned.

## Sources
Sources are embedded per page, checked 2026-11-10. Pino Pascali uses the current fondazionepascali.it site (€10 full, €6 eligible concessions); the old €5/Green Pass page is obsolete. Church opening times and charges are not confirmed. No exact transport timetable or fares are invented.

## Remaining gates
Cloud browser cannot reach the isolated local HTTP server. file:// inspection was refused by browser URL policy, and that route was stopped. Desktop/mobile visual and actual browser language-click checks have not yet passed. An authorized Mac attempt also stopped: Python 3.9.6 could not run the current supported file-transfer helper (requires Python 3.10+), and browser access returned Transport closed twice. No server was started and no user tabs were touched on the Mac. Desktop/mobile screenshots and actual language-menu clicks therefore remain unverified. This report does not claim a deployment; any publication must be checked against the exact remote commit and production response.

## Reproduce
Use Node 24, npm ci, npx tsc --noEmit, npm run build. Run npm run start -- -H 127.0.0.1 -p 3184. The HTTP check requires Python requests, beautifulsoup4 and lxml. It targets localhost port 3184. In isolated command environments start server and test in the same command. The build includes standalone output. The production build/deploy commands remain unchanged; the branch Preview command uses the isolated tooling described below.

Final independent rechecks confirmed the corrected Pascali wording and the 20-URL sitemap. Cloud HTTP checks are not a substitute for visual or browser interaction checks.

## Cloudflare preview repair (2026-11-10)
The initial remote commit 62dc3c5 passed the Next build but failed at `npx wrangler preview` because the repository had no Preview configuration. Successful production build e718790a confirmed that `npx wrangler deploy` automatically migrated this Next app to OpenNext 1.20.15, outputting `.open-next/worker.js` and `.open-next/assets`, compatibility date 2026-11-02. Unlike deploy, the preview command did not perform this adaptation.

The repair keeps production autoconfiguration and commands unchanged. Isolated, locked tooling and a separate explicit preview configuration build OpenNext, with dummy cache/queue and no production self-reference or data resources. The existing image transformation capability and static assets are the only declared preview bindings. The Preview command becomes `node scripts/cloudflare-preview.mjs --publish`; local `--build-only` never publishes. No automatic migration/setup/resource creation runs in this script. `--ignore-base-config` prevents base settings being copied when a Preview is created; an existing same-name Preview must be checked for retained secrets before publishing.

Next 15.5.28 is pinned to satisfy OpenNext's published peer requirement without force or legacy-peer overrides. TypeScript, Next/OpenNext build, 29 local production HTTP checks, 24 original image hashes, JavaScript syntax, whitespace checks, and clean npm 10.9.10 installs pass. Root and preview lockfiles are npm-10 compatible.

The local workerd runtime could not start because the sandbox reports `uv_interface_addresses` system error. This is not a successful runtime test. The actual remote Preview URL must pass before merge. Desktop/mobile visual checks remain outstanding until a reachable browser preview exists.

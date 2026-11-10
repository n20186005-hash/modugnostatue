# Isolated branch preview

Production still runs `npm run build` then `npx wrangler deploy`. Do not replace the root production configuration or change account permissions.

Set only the non-production Preview command to:

    node scripts/cloudflare-preview.mjs --publish

The script uses locked tooling, builds the existing Next app with OpenNext, and calls Wrangler Preview with this explicit configuration. It never runs `migrate`, `setup`, creates data resources, or deploys production traffic. `--ignore-base-config` prevents inherited dashboard bindings. Only static assets and the existing image transformation capability are available to this preview. This file declares no production self-reference, R2, KV, database, queue or secrets. Before the first publish, confirm that no same-name Preview exists with retained secrets; --ignore-base-config only controls creation, not old Preview secrets. Cache, tag cache and queue use OpenNext's dummy implementations because this site has no ISR or server writes.

For local checks (no upload):

    node scripts/cloudflare-preview.mjs --build-only

Wrangler 4.159.0 requires a `previews` block and does not automatically adapt a no-config Next project. The successful production build used OpenNext 1.20.15, `.open-next/worker.js`, `.open-next/assets`, and compatibility date 2026-11-02. The isolated tooling uses those verified parameters. Next is pinned to the adapter-supported 15.5.28 patch release rather than ignoring its peer requirements.

Sources:
- https://developers.cloudflare.com/workers/previews/configuration/
- https://developers.cloudflare.com/workers/previews/resources/
- https://opennext.js.org/cloudflare/get-started

A successful build is not proof of a deployed preview. Verify the returned Preview URL and the exact GitHub commit before merging.

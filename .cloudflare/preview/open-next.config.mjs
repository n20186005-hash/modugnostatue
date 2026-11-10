import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// This site does not use ISR, server writes, or an external data cache.
// Keep previews independent of production data and revalidation services.
export default defineCloudflareConfig({
  incrementalCache: 'dummy',
  tagCache: 'dummy',
  queue: 'dummy',
});

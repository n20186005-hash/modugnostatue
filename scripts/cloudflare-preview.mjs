import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tooling = resolve(root, '.cloudflare/preview');
const args = process.argv.slice(2);
if (args.length !== 1 || !['--build-only', '--publish'].includes(args[0])) {
  throw new Error('Choose --build-only for local validation or --publish for a remote Preview.');
}
const env = {...process.env, WRANGLER_SEND_METRICS: 'false', NEXT_TELEMETRY_DISABLED: '1'};
function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {cwd: root, env, stdio: 'inherit'});
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
// Isolated tooling leaves the root package/lock, production autoconfiguration,
// and production command unchanged. No migrate/setup or resource creation runs.
run('npm', ['ci', '--prefix', tooling, '--no-audit', '--no-fund']);
run(process.execPath, [
  resolve(tooling, 'node_modules/@opennextjs/cloudflare/dist/cli/index.js'),
  'build', '--openNextConfigPath', resolve(tooling, 'open-next.config.mjs'),
  '--config', resolve(tooling, 'wrangler.json'),
]);
if (args[0] === '--publish') {
  run(process.execPath, [
    resolve(tooling, 'node_modules/wrangler/bin/wrangler.js'),
    'preview', '--config', resolve(tooling, 'wrangler.json'),
    '--worker-name', 'modugnostatue', '--ignore-base-config',
  ]);
}

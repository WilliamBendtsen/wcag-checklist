
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wcag-checklist/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5249, hash: '492e4b9f21671e20c5895b22a661f16aa4f2c3246891c86ca370fb8e548122d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1118, hash: '009743557e979092a993126cfb909ebb6a15189312b532ed8eb8b937478baae1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PGSC6HSY.css': {size: 315012, hash: 'h24WEW1qnjI', text: () => import('./assets-chunks/styles-PGSC6HSY_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/wcag-checklist/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5249, hash: 'af74ddbf3e38b590947119327cb61755b3cb0b9d024a7205b782b16238a4bfb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1118, hash: 'c65442aba20ab6e5844049dabb17c7ba0191651db1a7a2770d15ef4aeb9d3700', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PGSC6HSY.css': {size: 315012, hash: 'h24WEW1qnjI', text: () => import('./assets-chunks/styles-PGSC6HSY_css.mjs').then(m => m.default)}
  },
};

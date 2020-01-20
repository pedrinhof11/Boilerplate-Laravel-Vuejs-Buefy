export function page (moduleName, path) {
  return () => import(/* webpackChunkName: '' */ `~/modules/${moduleName}/pages/${path}`).then(m => m.default || m)
}

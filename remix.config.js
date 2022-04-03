/**
 * @type {import('@remix-run/dev').AppConfig}
 */

module.exports =
  process.env.NODE_ENV === 'production'
    ? {
        serverBuildTarget: 'netlify',
        server: './server.js',
        ignoredRouteFiles: ['.*'],
      }
    : {
        ignoredRouteFiles: ['.*'],
      };

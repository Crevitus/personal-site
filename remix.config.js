/**
 * @type {import('@remix-run/dev').AppConfig}
 */

module.exports =
  process.env.NODE_ENV === 'production'
    ? {
        serverBuildTarget: 'netlify',
        server: './server.js',
        ignoredRouteFiles: ['.*'],
        appDirectory: 'app',
        assetsBuildDirectory: 'public/build',
        publicPath: '/build/',
      }
    : {
        ignoredRouteFiles: ['.*'],
      };

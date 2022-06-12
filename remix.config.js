/**
 * @type {import('@remix-run/dev').AppConfig}
 */

module.exports =
  process.env.NODE_ENV === 'production'
    ? {
        serverBuildTarget: 'vercel',
        server: './server.js',
        ignoredRouteFiles: ['**/.*'],
      }
    : {
        ignoredRouteFiles: ['**/.*'],
        // appDirectory: "app",
        // assetsBuildDirectory: "public/build",
        // serverBuildPath: "api/index.js",
        // publicPath: "/build/",
      };

/**
 * @type {import('@remix-run/dev').AppConfig}
 */

module.exports =
  process.env.NODE_ENV === 'production'
    ? {
        serverBuildTarget: 'vercel',
        server: './server.js',
        ignoredRouteFiles: ['.*'],
        serverBuildPath: 'api/index.js',
        // appDirectory: "app",
        // assetsBuildDirectory: "public/build",
        // publicPath: "/build/",
      }
    : {
        ignoredRouteFiles: ['.*'],
        // appDirectory: "app",
        // assetsBuildDirectory: "public/build",
        // serverBuildPath: "api/index.js",
        // publicPath: "/build/",
      };

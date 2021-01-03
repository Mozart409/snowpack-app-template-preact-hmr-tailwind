module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@prefresh/snowpack',
    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
      },
    ],
  ],
  scripts: { 'build:css': 'postcss' },
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },

  alias: {
    /* ... */
  },
};

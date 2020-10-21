module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
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

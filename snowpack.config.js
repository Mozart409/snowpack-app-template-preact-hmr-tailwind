module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    '@prefresh/snowpack',
    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
      },
    ],
  ],

  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },

  alias: {
    /* ... */
  },
};

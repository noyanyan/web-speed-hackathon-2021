module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: 'auto',
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV,
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};

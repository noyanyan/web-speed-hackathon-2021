module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: 'commonjs',
        useBuiltIns: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: true,
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};

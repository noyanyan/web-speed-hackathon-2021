module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: 'auto',
        useBuiltIns: 'usage',
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

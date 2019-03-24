require('babel-register')({
  presets: [
    [
      'env',
      {
        targets: {node: 'current'},
      },
    ],
  ],
  plugins: ['transform-object-rest-spread'],
});

module.exports = require('./src/app');

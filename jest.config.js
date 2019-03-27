const babelConfig = {
  presets: [
    [
      'env',
      {
        targets: {node: 'current'},
      },
    ],
  ],
  plugins: ['transform-object-rest-spread'],
};

require('babel-register')(babelConfig);
require('babel-polyfill');

const {join} = require('path');

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

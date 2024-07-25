'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{js,css}',
      options: {
        singleQuote: true,
        endOfLine: 'lf',
        printWidth: 120,
      },
    },
  ],
};

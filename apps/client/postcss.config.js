// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const path = require('path');

const aliasMap = {
  '@ui': (filename) => path.resolve(__dirname, `../../packages/ui/${filename}`),
};

module.exports = {
  plugins: {
    /**
     * css 내의 import alias 대응
     *
     * 참고: https://stackoverflow.com/questions/76607491/css-import-aliases-with-next-js
     */
    'postcss-import': {
      resolve: (id, basedir) => {
        const [aliasName, ...rest] = id.split('/');
        const filename = rest.join('/');

        return aliasMap[aliasName](filename);
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

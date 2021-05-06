const presets = ['next/babel'];

const plugins = [
  ['babel-plugin-styled-components',
    {
      displayName: true,
      fileName: true,
      ssr: true,
    },
  ],
];

module.exports = {
  presets,
  plugins,
};

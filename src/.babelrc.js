module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'emotion',
      {
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[dirname]--[filename]--[local]',
        cssPropOptimization: true,
      },
    ],
  ],
  env: {
    test: {
      // storyshots 用の設定
      // cf. https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
      plugins: ['require-context-hook', 'dynamic-import-node'],
    },
  },
};

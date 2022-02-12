module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  previewHead: (head) => `
  ${head}
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <style>
  body {
      font-family: 'Poppins';
  }
  </style>
  `,
};

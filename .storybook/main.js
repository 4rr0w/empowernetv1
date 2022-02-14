module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
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
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <style>
  body {
      font-family: 'Poppins';
  }
  </style>
  `,
};

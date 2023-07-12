import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-visual-design',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: false,
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'https://test-newboss.otosaas.com',
      changeOrigin: true,
    },
  },
  // externals: {
  //   react: 'window.React',
  // },
  // scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js']
  // more config: https://d.umijs.org/config
});

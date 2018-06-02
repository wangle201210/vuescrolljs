const path = require('path');

function resolve(dirname) {
  return path.resolve(__dirname, dirname);
}

module.exports = {
  base: '/',
  host: '127.0.0.1',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuescroll.js',
      description:
        'A scrolling chamberlain with a simple getting-start and full configuration'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuescroll.js',
      description: '一个简单上手，有充足配置的滚动小管家'
    }
  },
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    repo: 'wangyi7099/vuescroll',
    docsRepo: 'wangyi7099/vuescrolljs',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Demo',
            items: [
              { text: 'Basic', link: '/Demo/Basic/' },
              { text: 'Advanced', link: '/Demo/Advanced/' }
            ]
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide'),
          '/Demo/Basic/': genDemo('Basic Demo'),
          '/Demo/Advanced/': genDemo('Advanced Demo')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: 'Demo',
            items: [
              { text: '基础', link: '/zh/Demo/Basic/' },
              { text: '高级', link: '/zh/Demo/Advanced/' }
            ]
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南'),
          '/zh/Demo/Basic/': genDemo('基础Demo'),
          '/zh/Demo/Advanced/': genDemo('高级Demo')
        }
      }
    }
  },
  configureWebpack: (config, isServer) => {
    let base = {
      resolve: {
        alias: {
          assets: resolve('./assets')
        }
      }
    };
    return base;
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', 'getting-started', 'Configuration', 'event', 'api', 'slot']
    }
  ];
}

function genDemo(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['']
    }
  ];
}

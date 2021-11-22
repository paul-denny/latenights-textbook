// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Late Nights',
  url: 'https://textbook.latenights.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LateNights',
  projectName: 'latenights-textbook',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/James-Ansley/latenights-textbook',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        hideOnScroll: true,
        title: 'LateNights',
        logo: {
          alt: 'LateNights Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://latenights.me',
            position: 'left',
            label: 'Moodle Page'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'Welcome',
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Moodle',
            items: [
              {
                label: 'Moodle Page',
                to: 'https://latenights.me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Late Nights, Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
      colorMode: {
        switchConfig: {
          darkIcon: '✨',
          lightIcon: '☀️',
        },
      },
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;

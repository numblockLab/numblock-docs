// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NumBlock Docs',
  tagline: 'Provide infrastructure to accomplish goals that propel blockchain technology into a Web3 future',
  url: 'https://docs.numblock.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NumBlock', // Usually your GitHub org/user name.
  projectName: 'NUMB', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/numblockLab/numblock-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/logo.JPG',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Learn',
          },
          {to: 'docs/architecture/overview', label: 'Architecture', position: 'left'},
	  {to: 'docs/developers/overview', label: 'Developers', position: 'left'},
          {to: '/docs/validators/validator-node', label: 'Validators', position: 'left'},	
          {
            href: 'https://github.com/numblockLab',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/docs/overview',
              },
              {
                label: 'Architecture',
                to: 'docs/architecture/overview',
              },
              {
                label: 'Developers',
                to: 'docs/developers/overview',
              },
              {
                label: 'Validators',
                to: '/docs/validators/validator-node',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/NumBlockOrg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/numblockorg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/numblockLab',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@numblock',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/jAAZ9wj2',
              },
              {
                label: 'Blog',
                href: 'https://docs.numblock.org/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Home',
                href: 'https://numblock.org/',
              },
              {
                label: 'Testnet Explorer',
                href: 'https://testnet.numblock.org/',
              },
              {
                label: 'Testnet Faucet',
                href: 'https://faucet-testnet.numblock.org/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NumBlock Foundation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

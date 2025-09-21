import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FlowSynx',
  tagline: 'Design, control, and automate every step of your workflow—linking ideas, decisions, and actions into a single, smart execution engine—all without writing a line of code.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://flowsynx.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flowsynx', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XD4R0EG3EP',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/OpenGraph.jpg',
    navbar: {
      title: 'FlowSynx',
      logo: {
        alt: 'FlowSynx Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'https://plugins.flowsynx.io', 
          label: 'Plugins', 
          position: 'left'
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          to: 'http://discord.flowsynx.io/',
          position: 'right',
          label: 'Join our Discord',
          className: 'button button--primary button--md join-discord-button'
        },
        {
          href: 'https://github.com/flowsynx/flowsynx',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Concepts',
              to: '/docs/concepts',
            },
            {
              label: 'Get Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/flowsynx/flowsynx',
            },
            {
              label: 'Discord',
              href: 'http://discord.flowsynx.io',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@flowsynx',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/flowsynx',
            },
            {
              label: 'X',
              href: 'https://x.com/flowsynxio',
            },
          ],
        },
        {
          title: 'News & Media',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - FlowSynx - All rights reserved.<br />
      Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. Hosted at <a href="https://pages.github.com/" target="_blank">Github Pages</a>.`
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'RPBB8MPKU9',

      // Public API key: it is safe to commit it
      apiKey: 'bfa75134aabeff74b771bad3406ddc6a',

      indexName: 'flowsynx',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

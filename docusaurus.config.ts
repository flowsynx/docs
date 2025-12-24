import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FlowSynx',
  tagline: 'Seamlessly unify data and compositional substrate across legacy, cloud, and modern systems using plugin-driven, declarative DAGs—delivering secure, reliable, auditable, and fully controllable automation for the hybrid enterprise.',
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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            '1.2.x': {
              label: '1.2.x',
              banner: 'none',
            },
            current: {
              label: '1.3.x (Latest)',
              path: '/',
            },
          },
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          routeBasePath: 'blog',
          blogSidebarCount: 10,
          postsPerPage: 6,
          blogTitle: 'Blog',
          blogDescription: 'Technical articles and tutorials'
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
        to: 'https://schema.flowsynx.io', 
        label: 'Schemas', 
        position: 'left'
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
        type: 'doc',
        docId: 'faq/faq',
        label: 'FAQ',
        position: 'left',
      },
      {
        type: 'docsVersionDropdown',
        position: 'right'
      },
      {
        to: 'https://discord.flowsynx.io/',
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
          label: 'Getting Started',
          to: '/docs/getting-started',
        },
        {
          label: 'Quick Starts',
          to: '/docs/getting-started/quickstarts/flowsynx-in-5-minutes',
        },
        {
          label: 'Schemas',
          href: 'https://schema.flowsynx.io',
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
          href: 'https://discord.flowsynx.io',
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
      logo: {
        alt: 'FlowSynx Logo',
        src: 'img/logo.svg',
        href: '/',
        width: 96,
      },
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

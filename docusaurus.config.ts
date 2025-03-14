import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GMI Cloud Document Site',
  tagline: 'Welcome to the GMI Cloud Resource Docs!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.gmicloud.ai/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/document-site',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GMISWE', // Usually your GitHub org/user name.
  projectName: 'document-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/GMISWE/document-site/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/GMISWE/document-site/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        gtag: {
          trackingID: 'GTM-P5WZVMXP',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/gmi-pfp.jpg',
    navbar: {
      title: 'GMI Documentation',
      logo: {
        alt: 'GMI Document Site Logo',
        src: 'img/gmi-icon.png',
      },
      items: [
        {
          to: '/inference-engine',
          position: 'left',
          label: 'Inference Engine',
        },
        {
          to: '/cluster-engine',
          position: 'left',
          label: 'Cluster Engine',
        },
        {
          to: '/migration',
          position: 'left',
          label: 'Migration Guide',
        },
        {
          href: 'https://www.gmicloud.ai/blog', 
          label: 'Blog', 
          position: 'left'},
        {
          href: 'https://github.com/GMISWE/document-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'What We Do',
              to: '/intro',
            },
            {
              label: 'Cluster Engine',
              to: '/cluster-engine'
            },
            {
              label: 'Inference Engine',
              to: '/inference-engine'
            },
            {
              label: 'Migration',
              to: '/migration'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/gmi_cloud',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/89671544/admin/feed/posts/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCYvrXI_ojg1Hcv3cT6j1CSw',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GMI Cloud',
              href: 'https://www.gmicloud.ai'
            },
            {
              label: 'Blog',
              href: 'https://www.gmicloud.ai/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/GMISWE/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GMI Cloud, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

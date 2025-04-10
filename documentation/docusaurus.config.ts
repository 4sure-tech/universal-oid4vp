import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Universal OID4VP',
    tagline: 'Universal integration API for OpenID For Verifiable Presentations',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://4sure-tech.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/universal-oid4vp/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: '4sure-tech', // Usually your GitHub org/user name.
    projectName: 'universal-oid4vp', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },


    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "api", // plugin id
                docsPluginId: "classic", // configured for preset-classic
                config: {
                    "universal-oid4vp": {
                        specPath: "docs/openapi.yaml",
                        outputDir: "docs/openapi",
                        showSchemas: true,
                        downloadUrl: '/oid4vp.yaml',
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag"

                        },
                    } satisfies OpenApiPlugin.Options,
                }
            },
        ]
    ],
    themes: ["docusaurus-theme-openapi-docs"],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    docItemComponent: "@theme/ApiItem", // Derived from doc
                },
                blog: false,
                /*blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },*/
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Universal OID4VP',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
          /*  items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],*/
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Links',
                    items: [
                        {
                            label: 'Readme',
                            to: '/docs',
                        },
                        {
                            label: 'OpenAPI',
                            to: '/docs/category/openapi',
                        },

                    ],
                },
               /* {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/docusaurus',
                        },
                    ],
                },*/
                {
                    title: 'More',
                    items: [
                        /*{
                            label: 'Blog',
                            to: '/blog',
                        },*/
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Fides Community`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

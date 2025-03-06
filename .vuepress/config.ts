import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  bundler: viteBundler(),

  markdown: {
    html: true, // Enable HTML in Markdown
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  theme: defaultTheme({
    logo: './logo.png',
    logoAlt: 'TOR-W',
    home: '/',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Roles',
        children: [
          { text: 'TOR-W Roles', link: '/roles/tor-w/roles.html' },
          { text: 'Modding Us Roles', link: '/roles/modding-us/mu-roles.html'},
          { text: 'Game Settings', link: '/roles/settings/game.html' },
          { text: 'System Settings', link: '/roles/settings/system.html' },
          { text: 'Mod Settings', link: '/roles/settings/mod.html' },
          { text: 'Game Modifiers', link: '/roles/settings/modifiers.html' },
          { text: 'Resources', link: '/roles/settings/resources.html'}
        ],
      },
      { 
        text: 'Changelogs',
        children: [
          { text: 'TOR-W Changelogs', link: '/changelogs/tor-w/tor-w.html' },
          { text: 'Modding Us Changelogs', link: '/changelogs/modding-us/mu.html'},
          { text: 'Changelogs Tags', link: '/changelogs/tags.html'}
        ],
      },
      { text: 'Posts', link: '/posts/posts.html' },
      {
        text: 'About',
        children: [
          { text: 'About TOR-W', link: '/abouts/about/about-mod.html' },
          { text: 'About Modding Us', link: '/abouts/about/aboutmu.html' },
          { text: 'About Us', link: '/abouts/about/aboutUs.html' }
        ],
      },
      { text: 'Install', link: '/install.html' },
      { text: 'FAQ', link: '/faq.html' },
    ],
    sidebar: {
      '/posts/tor-w-posts': [
        { text: 'Back to Posts', link: '/posts/posts.html' },
        { text: 'Website Changes', link: '/posts/tor-w-posts/website.html' }
      ],
      '/abouts/about/': [
        { text: 'Back to About', link: '/abouts/about.md' },
        { text: 'About TOR-W', link: '/abouts/about/about-mod.html' },
        { text: 'About Modding Us', link: '/abouts/about/aboutmu.html' },
        { text: 'About Us', link: '/abouts/about/aboutUs.html' },
      ],
      '/roles/': [
        { text: 'Game Settings', link: '/roles/settings/game.html' },
        { text: 'System Settings', link: '/roles/settings/system.html' },
        { text: 'Mod Settings', link: '/roles/settings/mod.html' },
        { text: 'Game Modifiers', link: '/roles/settings/modifiers.html' },
        { text: 'Resources', link: '/roles/settings/resources.html'},
      ],
      '/roles/crewmates/power': [
        { text: 'Back to Crewmate Roles', link: '/roles/crewmates/crewmates.html' },
        { text: 'Illusionist', link: '/roles/crewmates/power/illusionist.html' },
        { text: 'Timekeeper', link: '/roles/crewmates/power/timekeeper.html' },
        { text: 'Telepath', link: '/roles/crewmates/power/telepath.html' },
      ],
      '/roles/crewmates/support': [
        { text: 'Back to Crewmate Roles', link: '/roles/crewmates/crewmates.html' },
        { text: 'Contractor', link: '/roles/crewmates/support/contractor.html' },
        { text: 'Sympathizer', link: '/roles/crewmates/support/sympathizer.html' },
      ],
    },
  }),

  lang: 'en-US',
  title: 'TOR-W',
  description: 'The mod that brings people together!',

  plugins: [
    searchPlugin({
      hotKeys: [
        { key: 'k', ctrl: true, alt: false, shift: false },
      ],
      locales: {
        '/': {
          placeholder: 'Search...',
        },
      },
    }),
  ],
});

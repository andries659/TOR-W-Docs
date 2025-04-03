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
    ['link', { rel: 'stylesheet', href: '/styles/index.scss' }]
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
          { text: 'Game Settings', link: '/roles/settings/game.html' },
          { text: 'System Settings', link: '/roles/settings/system.html' },
          { text: 'Mod Settings', link: '/roles/settings/mod.html' },
          { text: 'Game Modifiers', link: '/roles/settings/modifiers.html' },
          { text: 'Resources', link: '/roles/settings/resources.html' }
        ],
      },
      {
        text: 'Changelogs',
        children: [
          { text: 'TOR-W Changelogs', link: '/changelogs/tor-w/tor-w.html' },
          { text: 'Changelogs Tags', link: '/changelogs/tags.html' }
        ],
      },
      { text: 'Posts', link: '/posts/posts.html' },
      { text: 'About', link: '/abouts/about.html' },
      { text: 'Install', link: '/install.html' },
      { text: 'FAQ', link: '/faq.html' },
    ],
    sidebar: {
      '/abouts/about/': [
        { text: 'Back to About', link: '/abouts/about.html' },
        { text: 'About TOR-W', link: '/abouts/about/about-mod.html' },
        { text: 'About Us', link: '/abouts/about/aboutUs.html' },
      ],
      '/roles/': [
      { text: 'TOR-W Roles', link: '/roles/tor-w/roles.html' },
      { text: 'Crewmates', link: '/roles/tor-w/crewmates/crewmates.html' },
      { text: 'Impostors', link: '/roles/tor-w/impostors/impostors.html' },
      { text: 'Neutrals', link: '/roles/tor-w/neutrals/neutrals.html' },
      { text: 'Game Settings', link: '/roles/settings/game.html' },
      { text: 'System Settings', link: '/roles/settings/system.html' },
      { text: 'Mod Settings', link: '/roles/settings/mod.html' },
      { text: 'Game Modifiers', link: '/roles/settings/modifiers.html' },
      { text: 'Resources', link: '/roles/settings/resources.html' },
      ],
      '/roles/settings': [
      { text: 'TOR-W Roles', link: '/roles/tor-w/roles.html' },
      { text: 'Crewmates', link: '/roles/tor-w/crewmates/crewmates.html' },
      { text: 'Impostors', link: '/roles/tor-w/impostors/impostors.html' },
      { text: 'Neutrals', link: '/roles/tor-w/neutrals/neutrals.html' },
      { text: 'Game Settings', link: '/roles/settings/game.html' },
      { text: 'System Settings', link: '/roles/settings/system.html' },
      { text: 'Mod Settings', link: '/roles/settings/mod.html' },
      { text: 'Game Modifiers', link: '/roles/settings/modifiers.html' },
      { text: 'Resources', link: '/roles/settings/resources.html' },
      ],
  },
    notFound: [
    'This link is broken honey.',
    'Where are you going?',
    'Huh? How did you end up here?',
    'Honestly, how did you get here?',
    'This is not the page you are looking for.',
    'Nothing to see here.',
    'Nope. Not here.',
    'Whatever you\'re looking for, it\'s not here.'
  ],
    backToHome: 'Take me back to my safe space please!',
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

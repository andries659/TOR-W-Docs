export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"FAQ's"} }],
  ["/install.html", { loader: () => import(/* webpackChunkName: "install.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/install.html.js"), meta: {"title":"Install"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/abouts/about.html", { loader: () => import(/* webpackChunkName: "abouts_about.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/abouts/about.html.js"), meta: {"title":"About"} }],
  ["/changelogs/tags.html", { loader: () => import(/* webpackChunkName: "changelogs_tags.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/changelogs/tags.html.js"), meta: {"title":"Changelog Tags"} }],
  ["/posts/posts.html", { loader: () => import(/* webpackChunkName: "posts_posts.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/posts/posts.html.js"), meta: {"title":"Posts"} }],
  ["/abouts/about/about-mod.html", { loader: () => import(/* webpackChunkName: "abouts_about_about-mod.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/abouts/about/about-mod.html.js"), meta: {"title":"About TOR-W"} }],
  ["/abouts/about/aboutUs.html", { loader: () => import(/* webpackChunkName: "abouts_about_aboutUs.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/abouts/about/aboutUs.html.js"), meta: {"title":"About Us"} }],
  ["/changelogs/tor-w/dev.html", { loader: () => import(/* webpackChunkName: "changelogs_tor-w_dev.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/changelogs/tor-w/dev.html.js"), meta: {"title":"Test Changelogs"} }],
  ["/changelogs/tor-w/stable.html", { loader: () => import(/* webpackChunkName: "changelogs_tor-w_stable.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/changelogs/tor-w/stable.html.js"), meta: {"title":"Stable Changelogs"} }],
  ["/changelogs/tor-w/tor-w.html", { loader: () => import(/* webpackChunkName: "changelogs_tor-w_tor-w.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/changelogs/tor-w/tor-w.html.js"), meta: {"title":"TOR-W Changelogs"} }],
  ["/posts/tor-w-posts/planned.html", { loader: () => import(/* webpackChunkName: "posts_tor-w-posts_planned.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/posts/tor-w-posts/planned.html.js"), meta: {"title":"Planned Stuff"} }],
  ["/posts/tor-w-posts/website.html", { loader: () => import(/* webpackChunkName: "posts_tor-w-posts_website.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/posts/tor-w-posts/website.html.js"), meta: {"title":"Website Changes"} }],
  ["/roles/settings/game.html", { loader: () => import(/* webpackChunkName: "roles_settings_game.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/settings/game.html.js"), meta: {"title":"Game Settings"} }],
  ["/roles/settings/mod.html", { loader: () => import(/* webpackChunkName: "roles_settings_mod.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/settings/mod.html.js"), meta: {"title":"Mod Settings"} }],
  ["/roles/settings/modifiers.html", { loader: () => import(/* webpackChunkName: "roles_settings_modifiers.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/settings/modifiers.html.js"), meta: {"title":"Game Modifiers"} }],
  ["/roles/settings/resources.html", { loader: () => import(/* webpackChunkName: "roles_settings_resources.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/settings/resources.html.js"), meta: {"title":"Resources"} }],
  ["/roles/settings/system.html", { loader: () => import(/* webpackChunkName: "roles_settings_system.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/settings/system.html.js"), meta: {"title":"System Settings"} }],
  ["/roles/tor-w/roles.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_roles.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/roles.html.js"), meta: {"title":"TOR-W Roles"} }],
  ["/roles/tor-w/crewmates/crewmates.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_crewmates.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/crewmates.html.js"), meta: {"title":"Crewmate Roles"} }],
  ["/roles/tor-w/impostors/impostors.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_impostors_impostors.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/impostors/impostors.html.js"), meta: {"title":"Impostor Roles"} }],
  ["/roles/tor-w/neutrals/neutrals.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_neutrals_neutrals.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/neutrals/neutrals.html.js"), meta: {"title":"Neutral Roles"} }],
  ["/roles/tor-w/crewmates/crewroles/Chameleon.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_crewroles_Chameleon.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/crewroles/Chameleon.html.js"), meta: {"title":"Chameleon"} }],
  ["/roles/tor-w/crewmates/crewroles/Mayor.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_crewroles_Mayor.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/crewroles/Mayor.html.js"), meta: {"title":"Mayor"} }],
  ["/roles/tor-w/crewmates/crewroles/Sheriff.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_crewroles_Sheriff.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/crewroles/Sheriff.html.js"), meta: {"title":"Shriff"} }],
  ["/roles/tor-w/crewmates/crewroles/Teleporter.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_crewroles_Teleporter.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/crewroles/Teleporter.html.js"), meta: {"title":"Teleporter"} }],
  ["/roles/tor-w/impostors/improles/Dragger.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_impostors_improles_Dragger.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/impostors/improles/Dragger.html.js"), meta: {"title":"Dragger"} }],
  ["/roles/tor-w/neutrals/neutralroles/Jester.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_neutrals_neutralroles_Jester.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/neutrals/neutralroles/Jester.html.js"), meta: {"title":"Jester"} }],
  ["/roles/tor-w/neutrals/neutralroles/Traitor.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_neutrals_neutralroles_Traitor.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/roles/tor-w/neutrals/neutralroles/Traitor.html.js"), meta: {"title":"Traitor"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/User/Desktop/TOR-W Website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

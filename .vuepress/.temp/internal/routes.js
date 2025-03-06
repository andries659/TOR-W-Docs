export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"FAQ's"} }],
  ["/install.html", { loader: () => import(/* webpackChunkName: "install.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/install.html.js"), meta: {"title":"Install"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/abouts/about.html", { loader: () => import(/* webpackChunkName: "abouts_about.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about.html.js"), meta: {"title":"About"} }],
  ["/posts/posts.html", { loader: () => import(/* webpackChunkName: "posts_posts.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/posts/posts.html.js"), meta: {"title":"Posts"} }],
  ["/changelogs/tags.html", { loader: () => import(/* webpackChunkName: "changelogs_tags.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/tags.html.js"), meta: {"title":"Changelog Tags"} }],
  ["/abouts/about/about-mod.html", { loader: () => import(/* webpackChunkName: "abouts_about_about-mod.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about/about-mod.html.js"), meta: {"title":"About The Mod"} }],
  ["/abouts/about/aboutmu.html", { loader: () => import(/* webpackChunkName: "abouts_about_aboutmu.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about/aboutmu.html.js"), meta: {"title":"About Modding Us"} }],
  ["/abouts/about/aboutUs.html", { loader: () => import(/* webpackChunkName: "abouts_about_aboutUs.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about/aboutUs.html.js"), meta: {"title":"About Us"} }],
  ["/posts/tor-w-posts/website.html", { loader: () => import(/* webpackChunkName: "posts_tor-w-posts_website.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/posts/tor-w-posts/website.html.js"), meta: {"title":"Website Changes"} }],
  ["/changelogs/modding-us/dev.html", { loader: () => import(/* webpackChunkName: "changelogs_modding-us_dev.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/modding-us/dev.html.js"), meta: {"title":"Modding Us Beta Changelogs"} }],
  ["/changelogs/modding-us/mu.html", { loader: () => import(/* webpackChunkName: "changelogs_modding-us_mu.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/modding-us/mu.html.js"), meta: {"title":"Modding Us Changelogs"} }],
  ["/changelogs/modding-us/stable.html", { loader: () => import(/* webpackChunkName: "changelogs_modding-us_stable.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/modding-us/stable.html.js"), meta: {"title":"Modding Us Stable Changelogs"} }],
  ["/changelogs/tor-w/dev.html", { loader: () => import(/* webpackChunkName: "changelogs_tor-w_dev.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/tor-w/dev.html.js"), meta: {"title":"Dev Changelogs"} }],
  ["/changelogs/tor-w/stable.html", { loader: () => import(/* webpackChunkName: "changelogs_tor-w_stable.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/tor-w/stable.html.js"), meta: {"title":"Stable Changelogs"} }],
  ["/changelogs/tor-w/tor-w.html", { loader: () => import(/* webpackChunkName: "changelogs_tor-w_tor-w.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/tor-w/tor-w.html.js"), meta: {"title":"TOR-W Changelogs"} }],
  ["/roles/modding-us/mu-roles.html", { loader: () => import(/* webpackChunkName: "roles_modding-us_mu-roles.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/mu-roles.html.js"), meta: {"title":"Modding Us Roles"} }],
  ["/roles/settings/game.html", { loader: () => import(/* webpackChunkName: "roles_settings_game.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/game.html.js"), meta: {"title":"Game Settings"} }],
  ["/roles/settings/mod.html", { loader: () => import(/* webpackChunkName: "roles_settings_mod.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/mod.html.js"), meta: {"title":"Mod Settings"} }],
  ["/roles/settings/modifiers.html", { loader: () => import(/* webpackChunkName: "roles_settings_modifiers.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/modifiers.html.js"), meta: {"title":"Game Modifiers"} }],
  ["/roles/settings/resources.html", { loader: () => import(/* webpackChunkName: "roles_settings_resources.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/resources.html.js"), meta: {"title":"Resources"} }],
  ["/roles/settings/system.html", { loader: () => import(/* webpackChunkName: "roles_settings_system.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/system.html.js"), meta: {"title":"System Settings"} }],
  ["/roles/tor-w/roles.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_roles.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/roles.html.js"), meta: {"title":"TOR-W Roles"} }],
  ["/roles/modding-us/impostors/impostors.html", { loader: () => import(/* webpackChunkName: "roles_modding-us_impostors_impostors.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/impostors/impostors.html.js"), meta: {"title":"Impostors"} }],
  ["/roles/modding-us/crewmates/crewmates.html", { loader: () => import(/* webpackChunkName: "roles_modding-us_crewmates_crewmates.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/crewmates/crewmates.html.js"), meta: {"title":"Crewmate Roles"} }],
  ["/roles/modding-us/neutrals/neutrals.html", { loader: () => import(/* webpackChunkName: "roles_modding-us_neutrals_neutrals.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/neutrals/neutrals.html.js"), meta: {"title":"Neutral Roles"} }],
  ["/roles/tor-w/crewmates/crewmates.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_crewmates.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/crewmates.html.js"), meta: {"title":"Crewmate Roles"} }],
  ["/roles/tor-w/neutrals/neutrals.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_neutrals_neutrals.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/neutrals/neutrals.html.js"), meta: {"title":"Neutral Roles"} }],
  ["/roles/tor-w/impostors/impostors.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_impostors_impostors.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/impostors/impostors.html.js"), meta: {"title":"Impostors"} }],
  ["/roles/tor-w/crewmates/support/contractor.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_support_contractor.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/support/contractor.html.js"), meta: {"title":"Contractor"} }],
  ["/roles/tor-w/crewmates/support/sympathizer.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_support_sympathizer.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/support/sympathizer.html.js"), meta: {"title":"Sympathizer"} }],
  ["/roles/tor-w/neutrals/chaos/agent.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_neutrals_chaos_agent.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/neutrals/chaos/agent.html.js"), meta: {"title":""} }],
  ["/roles/tor-w/neutrals/chaos/betrayer.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_neutrals_chaos_betrayer.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/neutrals/chaos/betrayer.html.js"), meta: {"title":""} }],
  ["/roles/tor-w/crewmates/power/illusionist.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_power_illusionist.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/power/illusionist.html.js"), meta: {"title":""} }],
  ["/roles/tor-w/crewmates/power/telepath.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_power_telepath.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/power/telepath.html.js"), meta: {"title":""} }],
  ["/roles/tor-w/crewmates/power/timekeeper.html", { loader: () => import(/* webpackChunkName: "roles_tor-w_crewmates_power_timekeeper.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/tor-w/crewmates/power/timekeeper.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

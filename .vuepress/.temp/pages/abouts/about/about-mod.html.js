import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about/about-mod.html.vue"
const data = JSON.parse("{\"path\":\"/abouts/about/about-mod.html\",\"title\":\"About The Mod\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About The Mod\",\"prev\":\"/abouts/about.html\"},\"headers\":[{\"level\":2,\"title\":\"The Mission For TOR-W\",\"slug\":\"the-mission-for-tor-w\",\"link\":\"#the-mission-for-tor-w\",\"children\":[]},{\"level\":2,\"title\":\"What The Mod Offers\",\"slug\":\"what-the-mod-offers\",\"link\":\"#what-the-mod-offers\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"abouts/about/about-mod.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

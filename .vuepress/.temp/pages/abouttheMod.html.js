import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouttheMod.html.vue"
const data = JSON.parse("{\"path\":\"/abouttheMod.html\",\"title\":\"About The Mod\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About The Mod\"},\"headers\":[{\"level\":2,\"title\":\"The Mission For TOHO-C\",\"slug\":\"the-mission-for-toho-c\",\"link\":\"#the-mission-for-toho-c\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"abouttheMod.md\"}")
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

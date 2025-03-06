import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about/aboutmu.html.vue"
const data = JSON.parse("{\"path\":\"/abouts/about/aboutmu.html\",\"title\":\"About Modding Us\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About Modding Us\"},\"headers\":[{\"level\":2,\"title\":\"The Mission For Modding Us\",\"slug\":\"the-mission-for-modding-us\",\"link\":\"#the-mission-for-modding-us\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"abouts/about/aboutmu.md\"}")
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

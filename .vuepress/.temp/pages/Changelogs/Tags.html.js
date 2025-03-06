import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/tags.html.vue"
const data = JSON.parse("{\"path\":\"/changelogs/tags.html\",\"title\":\"Changelog Tags\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Changelog Tags\",\"sidebar\":[{\"text\":\"Changelogs Tags\",\"link\":\"/changelogs/tags.html\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"changelogs/tags.md\"}")
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

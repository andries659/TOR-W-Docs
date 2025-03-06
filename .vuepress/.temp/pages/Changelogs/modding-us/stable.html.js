import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/modding-us/stable.html.vue"
const data = JSON.parse("{\"path\":\"/changelogs/modding-us/stable.html\",\"title\":\"Modding Us Stable Changelogs\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Modding Us Stable Changelogs\",\"sidebar\":[{\"text\":\"Modding Us Changelogs\",\"link\":\"/changelogs/modding-us/mu.html\"},{\"text\":\"Modding Us Beta Changelogs\",\"link\":\"/changelogs/modding-us/dev.html\"},{\"text\":\"Modding Us Stable Changelogs\",\"link\":\"/changelogs/modding-us/stable.html\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"changelogs/modding-us/stable.md\"}")
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

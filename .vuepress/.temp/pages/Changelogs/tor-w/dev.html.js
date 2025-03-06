import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/tor-w/dev.html.vue"
const data = JSON.parse("{\"path\":\"/changelogs/tor-w/dev.html\",\"title\":\"Dev Changelogs\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Dev Changelogs\",\"sidebar\":[{\"text\":\"TOR-W Changelogs\",\"link\":\"/changelogs/tor-w/tor-w.html\"},{\"text\":\"TOR-W Dev Changelogs\",\"link\":\"/changelogs/tor-w/dev.html\"},{\"text\":\"TOR-W Stable Changelogs\",\"link\":\"/changelogs/tor-w/stable.html\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"changelogs/tor-w/dev.md\"}")
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

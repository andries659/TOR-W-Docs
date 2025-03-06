import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/system.html.vue"
const data = JSON.parse("{\"path\":\"/roles/settings/system.html\",\"title\":\"System Settings\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"System Settings\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"roles/settings/system.md\"}")
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

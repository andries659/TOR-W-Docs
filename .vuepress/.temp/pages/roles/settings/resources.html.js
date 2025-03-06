import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/settings/resources.html.vue"
const data = JSON.parse("{\"path\":\"/roles/settings/resources.html\",\"title\":\"Resources\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Resources\"},\"headers\":[{\"level\":2,\"title\":\"Mod Features\",\"slug\":\"mod-features\",\"link\":\"#mod-features\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"roles/settings/resources.md\"}")
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

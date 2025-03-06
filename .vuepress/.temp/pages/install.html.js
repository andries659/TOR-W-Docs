import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/install.html.vue"
const data = JSON.parse("{\"path\":\"/install.html\",\"title\":\"Install\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Install\"},\"headers\":[{\"level\":2,\"title\":\"Distribution Policy\",\"slug\":\"distribution-policy\",\"link\":\"#distribution-policy\",\"children\":[]},{\"level\":2,\"title\":\"Town Of Re-Worked (TOR-W)\",\"slug\":\"town-of-re-worked-tor-w\",\"link\":\"#town-of-re-worked-tor-w\",\"children\":[]},{\"level\":2,\"title\":\"Modding Us\",\"slug\":\"modding-us\",\"link\":\"#modding-us\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"install.md\"}")
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

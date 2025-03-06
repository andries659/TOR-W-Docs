import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/posts/posts.html.vue"
const data = JSON.parse("{\"path\":\"/posts/posts.html\",\"title\":\"Posts\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Posts\"},\"headers\":[{\"level\":2,\"title\":\"Posts\",\"slug\":\"posts\",\"link\":\"#posts\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/posts.md\"}")
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

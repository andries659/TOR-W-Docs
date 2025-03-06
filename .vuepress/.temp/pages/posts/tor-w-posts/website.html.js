import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/posts/tor-w-posts/website.html.vue"
const data = JSON.parse("{\"path\":\"/posts/tor-w-posts/website.html\",\"title\":\"Website Changes\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Website Changes\",\"prev\":\"/posts/posts.html\"},\"headers\":[{\"level\":2,\"title\":\"⚒️ Changes\",\"slug\":\"changes\",\"link\":\"#changes\",\"children\":[]},{\"level\":2,\"title\":\"⭐ New!\",\"slug\":\"new\",\"link\":\"#new\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/tor-w-posts/website.md\"}")
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

import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/impostors/impostors.html.vue"
const data = JSON.parse("{\"path\":\"/roles/modding-us/impostors/impostors.html\",\"title\":\"Impostors\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Impostors\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/modding-us/crewmates/crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/modding-us/impostors/impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/modding-us/neutrals/neutrals.html\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"roles/modding-us/impostors/impostors.md\"}")
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

import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/crewmates/crewmates.html.vue"
const data = JSON.parse("{\"path\":\"/roles/modding-us/crewmates/crewmates.html\",\"title\":\"Crewmate Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Crewmate Roles\",\"prev\":\"/roles/modding-us/mu-roles.html\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/modding-us/crewmates/crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/modding-us/impostors/impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/modding-us/neutrals/neutrals.html\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"roles/modding-us/crewmates/crewmates.md\"}")
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

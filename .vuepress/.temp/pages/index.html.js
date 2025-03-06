import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Home\",\"home\":true,\"heroImage\":\"/images/home.png\",\"heroText\":\"Town Of Re-Worked (TOR-W)\",\"tagline\":\"The mod that brings people together!\",\"actions\":[{\"text\":\"Role Info\",\"link\":\"/roles.html\",\"type\":\"secondary\"},{\"text\":\"Install Now!\",\"link\":\"/install.html\",\"type\":\"primary\"},{\"text\":\"FAQ\",\"link\":\"/faq.html\",\"type\":\"secondary\"}],\"footer\":\"© 2024 TOR-W - All Rights Reserved\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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

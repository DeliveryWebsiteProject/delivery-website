import { App, ImgHTMLAttributes, ReservedProps } from 'vue'

const getImage = (url: string): ImgHTMLAttributes & ReservedProps => {
  return require(`@/assets/images/${url}`)
}

const getIcon = (url: string): ImgHTMLAttributes & ReservedProps => {
  return require(`@/assets/icons/${url}.svg`)
}

export default (Vue: App<Element>) => {
  Vue.config.globalProperties.$getImage = getImage,
    Vue.config.globalProperties.$getIcon = getIcon,
    Vue.config.globalProperties.$scrollToTop = () => window.scrollTo(0, 0)
}

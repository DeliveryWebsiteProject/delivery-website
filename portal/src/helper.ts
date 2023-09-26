import { App, ImgHTMLAttributes, ReservedProps } from 'vue'

const getImage = (url: string, defImage?: string): ImgHTMLAttributes & ReservedProps => {
  try {
    return require(`@/assets/images/${url}`);
  } catch (err) {
    return require(`@/assets/images/${defImage}`);
  }
}

const getIcon = (url: string): ImgHTMLAttributes & ReservedProps => {
  return require(`@/assets/icons/${url}.svg`)
}

export default (Vue: App<Element>) => {
  Vue.config.globalProperties.$getImage = getImage,
    Vue.config.globalProperties.$getIcon = getIcon,
    Vue.config.globalProperties.$scrollToTop = () => window.scrollTo(0, 0)
}

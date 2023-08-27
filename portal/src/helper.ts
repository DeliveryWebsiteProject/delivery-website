import { App } from 'vue'

const getImage = (url: string): string => {
  return require(`@/assets/images/${url}`)
}

const getIcon = (url: string): string => {
  return require(`@/assets/icons/${url}.svg`)
}

export default (Vue: App<Element>) => {
  Vue.config.globalProperties.$getImage = getImage,
    Vue.config.globalProperties.$getIcon = getIcon
}
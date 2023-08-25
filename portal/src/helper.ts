const getImage = (url: string): string => {
    return require(`@/assets/images/${url}`)
}

const getIcon = (url: string): string => {
    return require(`@/assets/icons/${url}.svg`)
}

// TO-DO: Find Vue Component
export default (Vue: any) => {
    Vue.prototype.$getImage = getImage,
    Vue.prototype.$getIcon = getIcon
}
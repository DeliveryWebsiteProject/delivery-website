export default {
  scrollToTop: () => window.scrollTo(0, 0),

  getImage: (url: string, defImage?: string): string => {
    try {
      return require(`@/assets/images/${url}`);
    } catch (err) {
      return require(`@/assets/images/${defImage}`);
    }
  },

  getPizzaPhoto: (photoId: string): string => {
    return `${process.env.VUE_APP_API_URL}/photos/${photoId}`;
  },

  getIcon: (url: string): string => {
    return require(`@/assets/icons/${url}.svg`)
  },
}

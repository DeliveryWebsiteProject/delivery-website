export default {
  scrollToTop: () => window.scrollTo(0, 0),

  getImage: (url: string, defImage?: string): string => {
    try {
      return require(`@/assets/images/${url}`);
    } catch (err) {
      return require(`@/assets/images/${defImage}`);
    }
  },

  getPizzaPhoto: (photoId?: string): string => {
    let id = photoId != null && photoId.length > 0 ? photoId : '0';

    return `${process.env.VUE_APP_API_URL}/photos/${id}`;
  },

  getIcon: (url: string): string => {
    return require(`@/assets/icons/${url}.svg`)
  },
}

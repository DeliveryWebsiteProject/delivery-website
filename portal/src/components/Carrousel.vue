<template>
  <v-app id="vapp">
    <v-carousel hide-delimiter-background :show-arrows="false" height="404">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" />
    </v-carousel>
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
      ]
    }
  }
}
</script>

<style lang="scss" >
/* TODO: Remover v-btn__content */

.v-carousel__controls__item {
  background-color: rgba(255, 255, 255, 0.479);
  height: 12px !important;
  width: 12px !important;
  margin: 0 5px;
}

.v-application--wrap {
  min-height: 0;
}

.v-item--active {
  background-color: #FFF;
  height: 20px !important;
  width: 20px !important;
}
</style>

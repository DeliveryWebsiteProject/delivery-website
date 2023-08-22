<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
    <HeaderApp />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderApp from './components/Header.vue'

export default defineComponent({
  components: {
    HeaderApp,
  }
})
</script>

<style lang="scss">
@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'), url('@/assets/fonts/OpenSans.ttf');
}

@font-face {
  font-family: 'Display';
  src: local('Sabatons'), url('@/assets/fonts/Sabatons.ttf');
}

@font-face {
  font-family: 'Display Stamp';
  src: local('Sabatons Stamp'), url('@/assets/fonts/SabatonsStamp.ttf');
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: $background-dark;
  font-family: 'Open Sans';
}

::-webkit-scrollbar {
  width: 1em;
  background-color: $background-dark;
}

::-webkit-scrollbar-track {
  background: #1c1c1c;
  border-radius: 100vw;
  margin-block: 0.5em;
  margin-right: 10em;
}

::-webkit-scrollbar-thumb {
  background: rgba(155 155 155 / 1);
  border: 0.25em solid $background-dark;
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(155 155 155 / 0.7);
}
</style>

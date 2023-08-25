<template>
  <div id="app">
    <HeaderApp />
    <router-view />
  </div>
</template>

<script lang="ts">
import HeaderApp from './components/Header.vue'

export default {
  components: {
    HeaderApp,
  }
}
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

button {
  font-family: 'Open Sans';

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  cursor: pointer;
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

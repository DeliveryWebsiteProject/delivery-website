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

<style>
body {
  background-color: #202124;
  font-family: 'Montserrat', sans-serif;
}

::-webkit-scrollbar {
  width: 1em;
  background-color: #1c1c1c;
}

::-webkit-scrollbar-track {
  background: #1c1c1c;
  border-radius: 100vw;
  margin-block: 0.5em;
  margin-right: 10em;
}

::-webkit-scrollbar-thumb {
  background: rgba(155 155 155 / 1);
  border: 0.25em solid #1c1c1c;
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(155 155 155 / 0.7);
}
</style>

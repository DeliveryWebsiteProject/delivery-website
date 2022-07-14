<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/HeaderApp.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style>
html {
  font-family: "Montserrat", sans-serif;
}
</style>

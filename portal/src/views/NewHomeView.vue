<template>
  <div>
    <div>
      <img src="../assets/images/home_background.png" class="banner" />
    </div>
    <Card></Card>
  </div>
</template>

<script lang="ts">
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
h1 {
  color: $text-light;
}

.banner {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
}
</style>
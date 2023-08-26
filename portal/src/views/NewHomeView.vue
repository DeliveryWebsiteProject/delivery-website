<template>
  <div>
    <div>
      <Header />
      <img class="banner" src="../assets/images/home_background.png" />
    </div>
    <div>
      <Card />
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue'

export default {
  components: {
    Header,
    Card
  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
}
</style>
<template>
  <div>
    <Carrousel />
    <div>
      <Card class="card" />
    </div>
  </div>
</template>

<script lang="ts">
import Carrousel from '../components/Carrousel.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    Carrousel,
    Card
  }
}
</script>

<style lang="scss">
.card {
  margin: 50px;
}
</style>

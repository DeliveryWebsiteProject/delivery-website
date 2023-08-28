<template>
  <div>
    <img :src="$getImage('most_requested.svg')" alt="As mais pedidas" />
    <div class="cards">
      <Card v-for="pizza in pizzas" :key="pizza.name" :pizza="pizza" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue'

export default defineComponent({
  components: {
    Card
  },
  data: () => ({
    pizzas: [
      { name: 'Margherita', price: 50, photo: 'margherita.png' },
      { name: 'Capricchosa', price: 68, photo: 'capricchosa.png' },
      { name: 'Basileus', price: 52, photo: 'basileus.png' }
    ]
  })
})
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>

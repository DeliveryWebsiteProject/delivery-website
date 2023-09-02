<template>
  <div class="most_requested">
    <div>
      <img :src="$getImage('most_requested.svg')" alt="As mais pedidas" />
      <div class="cards">
        <Card v-for="pizza in pizzas" :key="pizza.name" :pizza="pizza" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../../components/Card.vue'

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
.most_requested {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>

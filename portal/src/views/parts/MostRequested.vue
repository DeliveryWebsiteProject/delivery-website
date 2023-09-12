<template>
  <div class="most_requested">
    <div>
      <img :src="$getImage('most_requested.svg')" alt="As mais pedidas" />
      <div class="options">
        <div class="cards">
          <Card v-for="pizza in pizzas" :key="pizza.name" :pizza="pizza" />
        </div>
        <router-link class="button" to="/cardapio" @click="$scrollToTop">
          <Button text="VER MAIS"  />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue';

export default defineComponent({
  components: {
    Card,
    Button
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

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;
}

.cards {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.button {
  text-decoration: none;
}
</style>

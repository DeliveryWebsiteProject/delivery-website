<template>
  <Header />
  <div class="cardapio">
    <img :src="$getImage('cardapio.svg')" alt="As mais pedidas" />
  </div>
  <div class="button-group">
    <Button v-for="(text, index) in filtrosTexts" :key="index" :text="text" class="button-item"
      :class="{ 'button-black': selectedButton !== text, 'button-green': selectedButton === text }"
      @click="selectedButton = text" />
    <SearchButton @pesquisa="searchPizza" />
  </div>
  <div class="cards">
    <Card v-for="pizza in filteredPizzas" :key="pizza.name" :pizza="pizza" class="card"/>
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import SearchButton from '../components/SearchButton.vue'
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import { PizzaCard } from '@/models'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Header,
    SearchButton,
    Button,
    Card
  },
  mounted() {
    this.filteredPizzas = this.pizzas  
  },
  data: () => ({
    filtrosTexts: ['Salgadas', 'Doces'],
    selectedButton: null,
    pizzas: [
      { name: 'Margherita', price: 50, photo: 'margherita.png' },
      { name: 'Capricchosa', price: 68, photo: 'capricchosa.png' },
      { name: 'Basileus', price: 52, photo: 'basileus.png' },
      { name: 'Basileus', price: 52, photo: 'basileus.png' },
      { name: 'Basileus', price: 52, photo: 'basileus.png' },
      { name: 'Basileus', price: 52, photo: 'basileus.png' },
      { name: 'Capricchosa', price: 68, photo: 'capricchosa.png' },
      { name: 'Margherita', price: 50, photo: 'margherita.png' },
    ] as PizzaCard[],
    filteredPizzas: [] as PizzaCard[]
  }),
  methods: {
    searchPizza(data: string) {
      // TO-DO: Arrumar busca quando houver consulta da API

      if (data.length > 0) {
        this.filteredPizzas = this.pizzas.filter( p => p.name.toLowerCase().includes(data.toLowerCase()));
      } else {
        this.filteredPizzas = this.pizzas
      }
    }
  }
})
</script>

<style scoped lang="scss">

.cardapio {
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.button-item {
  margin-right: 20px;
  width: 140px;
  height: 50px;
}

.button-black {
  background-color: $button-dark;
  color: $text-light;
}

.button-green {
  background-color: $primary-color;
  color: $text-light;
}

.button-item:hover {
  background-color: $primary-color;
}

.cards {
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 50px;
  margin-top: 5%;
  margin-left: 200px;
  margin-right: 200px;
}

.card {
  margin-bottom: 50px;
}
</style>

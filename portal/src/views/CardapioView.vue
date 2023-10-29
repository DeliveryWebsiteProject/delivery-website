<template>
  <Header />
  <Cart :is-cart-open="isCartOpen" @close-cart="closeCart" />
  <div class="cardapio">
    <img :src="getImage('cardapio.svg')" alt="As mais pedidas" />
  </div>
  <div class="button-group">
    <Button v-for="(text, index) in filtrosTexts" :key="index" :text="text" class="button-item"
      :class="{ 'button-black': selectedButton !== text, 'button-green': selectedButton === text }"
      @click="filterPizzas(text, index)"
    />

    <SearchButton @pesquisa="searchPizza" />
  </div>
  <div class="cards">
  <Card v-for="pizza in filteredPizzas" :key="pizza.name" :pizza="pizza" class="card" @open-cart="openCart" />
</div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Cart from '@/views/CartView.vue'; 
import SearchButton from '@/components/SearchButton.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import helper from '@/helper'
import { defineComponent } from 'vue'
import { mapGetters } from 'pinia'
import { usePizzaStore } from '@/stores'

export default defineComponent({
  components: {
    Header,
    Cart,
    SearchButton,
    Button,
    Card
  },
  mounted() {
    this.filteredPizzas = this.getPizzas()  
  },
  data() {
    return {
      isCartOpen: false,
      filtrosTexts: ['Salgadas', 'Doces'],
      selectedButton: '',
      filteredPizzas: [] as any[],
    };
  },
  methods: {
    openCart() {
      this.isCartOpen = true;
    },
    closeCart() {
      this.isCartOpen = false;
    },
    ...mapGetters( usePizzaStore, ['getPizzas']),
    searchPizza(data: string) {
      this.filteredPizzas = this.getPizzas()

      if (data.length > 0) {
        this.filteredPizzas = this.getPizzas().filter( p => p.name.toLowerCase().includes(data.toLowerCase()))
      }
    },
    filterPizzas(text: string, index: number) {
      if (this.selectedButton === text) {
        this.selectedButton = ''
        this.filteredPizzas = this.getPizzas()
      } else {
        this.selectedButton = text;
        this.filteredPizzas = this.getPizzas().filter( p => p.category == index )
      }
    },
    getImage(url: string) {
      return helper.getImage(url)
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
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  column-gap: 30px;
  padding: 50px 20px;
  justify-items: center;
}

.card {
  margin-bottom: 50px;
}
</style>

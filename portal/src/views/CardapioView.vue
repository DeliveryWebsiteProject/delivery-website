<template>
  <Header />
  <Cart :is-cart-open="isCartOpen" @close-cart="closeCart" @update-count="" />
  <div class="cardapio">
    <img :src="getImage('cardapio.svg')" alt="As mais pedidas" />
  </div>
  <div class="button-group">
    <Button
      v-for="(text, index) in filterTexts"
      :key="index"
      :text="text"
      class="button-item"
      :class="{
        'button-black': selectedFilter !== index,
        'button-green': selectedFilter == index
      }"
      @click="filterPizzas(index)"
    />

    <SearchButton @pesquisa="searchPizza" />
  </div>
  <div class="cards">
    <Card
      v-for="pizza in filteredPizzas"
      :key="pizza.name"
      :pizza="pizza"
      class="card"
      @open-cart="openCart"
      @add-to-cart="addToCart(pizza)"
    />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Cart from '@/views/CartView.vue'
import SearchButton from '@/components/SearchButton.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import helper from '@/helper'
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useCartStore, usePizzaStore } from '@/stores'
import { Pizza } from '@/models'

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
      filterTexts: ['Salgadas', 'Doces'],
      selectedFilter: -1,
      filteredPizzas: [] as Pizza[]
    }
  },
  methods: {
    ...mapState(usePizzaStore, ['getPizzas']),
    ...mapActions(useCartStore, ['addCartItem', 'fetchCart']),
    openCart() {
      this.isCartOpen = true
    },
    closeCart() {
      this.isCartOpen = false
    },
    async addToCart(pizza: Pizza) {
      await this.addCartItem(pizza)
    },
    searchPizza(data: string) {
      this.filteredPizzas = this.getPizzas()

      const input = data.toLowerCase()

      if (this.selectedFilter === -1) {
        this.filteredPizzas = this.getPizzas().filter((p) =>
          p.name.toLowerCase().includes(input)
        )
      } else {
        this.filteredPizzas = this.getPizzas().filter((p) => {
          return (
            p.name.toLowerCase().includes(input) &&
            p.category == this.selectedFilter
          )
        })
      }
    },
    filterPizzas(index: number) {
      if (this.selectedFilter === index) {
        this.selectedFilter = -1
        this.filteredPizzas = this.getPizzas()
      } else {
        this.selectedFilter = index
        this.filteredPizzas = this.getPizzas().filter(
          (p) => p.category == index
        )
      }
    },
    getImage(url: string) {
      return helper.getImage(url)
    },
    async updateItems() {
      await this.fetchCart()
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

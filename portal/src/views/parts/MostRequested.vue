<template>
  <div>
    <Cart :is-cart-open="isCartOpen" @close-cart="closeCart" @update-count="" />
    <div class="most_requested">
      <div>
        <img :src="getImage('most_requested.svg')" alt="As mais pedidas" />
        <div class="options">
          <div class="cards">
            <Card
              v-for="pizza in pizzas"
              :key="pizza.name"
              :pizza="pizza"
              @open-cart="openCart"
              @add-to-cart="addToCart(pizza)"
            />
          </div>
          <router-link class="button" to="/cardapio" @click="scrollToTop">
            <Button text="VISUALIZAR CARDÁPIO" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue';
import Cart from '@/views/CartView.vue';
import helper from '@/helper';
import { usePizzaStore, useCartStore } from '@/stores';
import { mapGetters, mapActions } from 'pinia';
import { Pizza } from '@/models';

export default defineComponent({
  components: {
    Card,
    Button,
    Cart
  },
  mounted() {
    const allPizzas = this.getPizzas();

    // Classifica as pizzas com base no número de solicitações em ordem decrescente
    allPizzas.sort((a, b) => (b.requests && b.requests.valueOf() || 0) - (a.requests && a.requests.valueOf() || 0));

    // Pega os três primeiros itens (as pizzas mais solicitadas)
    this.pizzas = allPizzas.slice(0, 3);
  },
  data: () => ({
    pizzas: [] as Pizza[],
    isCartOpen: false,
  }),
  methods: {
    ...mapGetters( usePizzaStore, ['getPizzas']),
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
    getImage(url: string) {
      return helper.getImage(url)
    },
    scrollToTop() {
      helper.scrollToTop()
    }
  }
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

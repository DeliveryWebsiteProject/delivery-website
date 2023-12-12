<template>
  <Cart
    :is-cart-open="isCartOpen"
    @close-cart="isCartOpen = false"
    @update-cart="updateCart"
  />
  <header :class="{ change_color: scrollPosition > 50 }">
    <div class="logo">
      <router-link to="/" @click="scrollToTop">
        <img :src="getIcon('logo')" />
      </router-link>
    </div>
    <div>
      <nav class="nav">
        <ul>
          <li v-for="item in navItems" :key="item.name">
            <router-link class="nav_item" :to="item.route" @click="scrollToTop">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="buttons">
      <button class="buttons_card" @click="toggleCart">
        <div class="buttons_card-count" v-if="getItemsQuantity() > 0">
          {{ formatCartCount(getItemsQuantity()) }}
        </div>
        <img :src="getIcon('card_colorful')" />
      </button>

      <UserButton />
    </div>
  </header>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useSessionStore } from '@/stores/session'
import { defineComponent } from 'vue'
import helper from '@/helper'
import UserButton from '@/components/UserButton.vue'
import Cart from '@/views/CartView.vue'
import { useCartStore } from '@/stores'

export default defineComponent({
  components: {
    UserButton,
    Cart
  },
  data: () => ({
    scrollPosition: 0,
    isCartOpen: false,

    navItems: [
      { name: 'INÍCIO', route: '/' },
      { name: 'CARDÁPIO', route: '/cardapio' },
      { name: 'SOBRE', route: '/about' }
    ]
  }),
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    ...mapState(useSessionStore, ['getToken', 'isLogged']),
    ...mapState(useCartStore, ['getItemsQuantity']),
    ...mapActions(useCartStore, ['fetchCart']),
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    scrollToTop() {
      helper.scrollToTop()
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },
    formatCartCount(value: number) {
      return value > 9 ? '9+' : value
    },
    async updateCart() {
      await this.fetchCart()
    }
  }
})
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;

  width: 100%;

  padding: 5px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #00000000;
  box-shadow: none;
  transition: background-color 0.5s ease-in-out;
}

.change_color {
  background-color: $background-dark;
  box-shadow: 0px 10px 10px 0px #0000004d;
  transition: background-color 0.5s ease-in-out;
}

.logo {
  width: 230px;
}

.nav {
  font-size: 20px;

  & ul {
    display: flex;
    flex-direction: row;
  }

  & li {
    display: inline-block;
  }

  &_item {
    margin: 0 20px;
    color: $text-light;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &::after {
      content: '';

      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;
      height: 3px;

      border-radius: 5px;
      background: $primary-color;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 200ms ease-in;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}

.buttons {
  display: flex;
  flex-direction: row;

  gap: 30px;

  &_card {
    height: 50px;
    width: 50px;

    position: relative;

    border-radius: 100%;

    background-color: $text-light;

    &-count {
      width: 18px;
      height: 18px;

      background-color: $primary-color;

      border-radius: 50%;

      transform: translate(100%, -100%);
      position: absolute;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 10px;
      color: $text-light;
    }
  }
}
</style>

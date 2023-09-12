<template>
  <header :class="{ change_color: scrollPosition > 50 }">
    <div class="logo">
      <router-link to="/" @click="$scrollToTop">
        <img :src="$getIcon('logo')" />
      </router-link>
    </div>
    <div>
      <nav class="nav">
        <ul>
          <li v-for="item in navItems" :key="item.name">
            <router-link class="nav_item" :to="item.route" @click="$scrollToTop">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="buttons">
      <button class="buttons_card">
        <img :src="$getIcon('card_colorful')" />
      </button>

      <router-link
        v-if="!logged"
        to="/login"
        @click="$scrollToTop"
        class="buttons_login"
      >
        Login
      </router-link>
      <div v-else>LOGADO</div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    scrollPosition: 0,
    logged: false,

    navItems: [
      { name: 'HOME', route: '/' },
      { name: 'CARDÁPIO', route: '/cardapio' },
      { name: 'SOBRE', route: '/about' }
    ]
  }),
  mounted() {
    window.addEventListener('scroll', this.updateScroll)

    localStorage.getItem('token') ? (this.logged = true) : (this.logged = false)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
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

    border-radius: 100%;

    background-color: $text-light;
  }

  &_login {
    height: 50px;
    width: 150px;

    background-color: $primary-color;
    transition: background-color 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;

    color: $text-light;
    font-weight: bold;
    font-size: 24px;

    text-decoration: none;

    &:hover {
      background-color: $primary-darker;
      transition: background-color 0.2s ease-in-out;
    }
  }
}
</style>

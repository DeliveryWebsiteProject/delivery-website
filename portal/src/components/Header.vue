<template>
  <header>
    <div class="container">
      <div class="container__logo">
        <router-link to="/"><img src="../assets/images/logo.png" /></router-link>
      </div>
      <div class="centered-menu">
        <nav class="container__nav">
          <ul>
            <li>
              <router-link class="link" to="/">HOME</router-link>
            </li>
            <li>
              <router-link class="link" to="/about">CARDÁPIO</router-link>
            </li>
            <li>
              <router-link class="link" to="/">SOBRE</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container__right">
        <div class="login" data-app>
          <!-- Login -->
          <span v-if="!isLogged" class="login__btn" to="/login">Login</span>
          <!-- User -->
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
// import UserOptions from './UserOptions.vue'

export default {
  components: {
    // UserOptions
  },
  data: () => ({
    showDialog: false,
    isLogged: false
  })
}
</script>

<style scoped lang="scss">
html {
  overflow: auto;
}

header {
  z-index: 1;
  position: relative;
}

.container {
  width: 100%;
  height: 80px;
  padding: 0;

  min-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    padding-left: 10px;
    float: left;
  }

  &__nav {
    font-size: 18px;
  }

  &__nav ul {
    display: flex;
    align-items: center;

    list-style: none;
  }

  &__nav li {
    display: inline-block;
  }

  &__right {
    padding-right: 20px;
  }

  .link {
    margin: 0 20px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    position: relative;
  }

  .link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: rgba(55, 140, 59, 1);

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms ease-in;
  }

  .link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.centered-menu {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.login {
  cursor: pointer;
  height: 40px;
  width: 100px;
  background-color: #378c3b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &__btn {
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
  }

  &_user {
    margin: 0 20px;

    &_icon {
      color: #fff !important;
    }
  }
}
</style>

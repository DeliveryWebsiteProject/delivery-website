<template>
  <header>
    <div class="container">
      <div class="container__logo">
        <router-link to="/">LOGO</router-link>
      </div>
      <nav class="container__nav">
        <ul>
          <li>
            <router-link to="/">Menu</router-link>
          </li>
          <li>
            <router-link to="/about">Sobre</router-link>
          </li>
          <li>
            <router-link to="/">Carrinho</router-link>
          </li>
        </ul>
      </nav>
      <router-view />
      <div class="login">
        <v-btn class="login__btn" color="green" absolute="true">Login</v-btn>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
html {
  overflow: auto;
}

body {
  margin: 0;
}

header {
  background: #1c1c1c;
}

.container {
  width: 100%;
  height: 60px;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  &__logo {
    float: left;
  }

  &__nav {
    float: right;
  }

  &__nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__nav li {
    margin: 0 35px;
    display: inline-block;
  }

  a {
    color: #378c3b;
    text-decoration: none;
    font-weight: bold;
  }
}

.login {
  &__btn {
    top: 0;
    right: 0;
    height: 60px;
    width: 130px;

    border-radius: 0;
    box-shadow: none !important;

    color: #ffffff !important;
    font-weight: bold;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
  }
}
</style>

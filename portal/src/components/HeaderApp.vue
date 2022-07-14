<!-- eslint-disable prettier/prettier -->
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
      <div class="__login">
        <v-btn color="green">
          Login
        </v-btn>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
body {
  margin: 0;
}

header {
  background: #0c0000;
}

header::after {
  content: "";
  display: table;
  clear: both;
}

.container {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  &__logo {
    float: left;
    color: red;
  }

  &__login {
    width: 100px;
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
    display: inline-block;
    margin: 0 35px;
  }

  router-link {
    text-decoration: none;
    color: #378c3b;
  }
}
</style>

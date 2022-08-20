<template>
  <header>
    <div class="container">
      <div class="container__logo">
        <router-link to="/"><img src="../assets/logo.png" /></router-link>
      </div>
      <nav class="container__nav">
        <ul>
          <li>
            <router-link class="link" to="/">Menu</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">Sobre</router-link>
          </li>
          <li>
            <router-link class="link" to="/">Carrinho</router-link>
          </li>
        </ul>
      </nav>
      <div class="login">
        <v-btn class="login__btn" to="/login">Login</v-btn>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
html {
  overflow: auto;
}

header {
  background: #1c1c1c;
}

.container {
  width: 100%;
  height: 81px;
  margin: 0;
  padding-left: 10px;

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

  .link {
    color: #378c3b;
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
    background: linear-gradient(
      90deg,
      rgba(50, 50, 50, 1) 30%,
      rgba(55, 140, 59, 1) 50%
    );

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms ease-in;
  }

  .link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.login {
  &__btn {
    top: 0;
    right: 0;
    height: 81px !important;
    width: 130px !important;
    position: absolute;
    background-color: green !important;

    border-radius: 0;
    box-shadow: none !important;

    color: #ffffff !important;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  }
}
</style>

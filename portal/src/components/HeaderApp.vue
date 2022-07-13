<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <div class="container">
      <div class="container__logo">LOGO</div>
      <nav class="container__nav">
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Carrinho</a>
          </li>
        </ul>
      </nav>
      <div class="__login">
        <v-btn>Login</v-btn>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

// html,
// body {
//   font-family: "Times New Roman", Times, serif;
// }

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

  a {
    text-decoration: none;
    color: #378c3b;
  }
}
</style>

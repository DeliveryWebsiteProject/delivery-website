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
          <li>
            <div class="login" data-app>
              <!-- Login -->
              <v-btn v-if="!isLogged" class="login__btn" to="/login"
                >Login</v-btn
              >
              <!-- User -->
              <div v-else class="login_user">
                <v-menu offset-y transition="slide-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <font-awesome-icon
                        class="login_user_icon fa-2x"
                        icon="fa-solid fa-circle-user"
                      />
                    </v-btn>
                  </template>
                  <UserOptions></UserOptions>
                </v-menu>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import UserOptions from './UserOptions.vue'
export default {
  components: {
    UserOptions
  },
  data: () => ({
    showDialog: false,
    isLogged: false
  })
}
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

.login {
  &__btn {
    height: 80px !important;
    width: 130px !important;
    background-color: #378c3b !important;

    border-radius: 0;
    box-shadow: none;

    color: #ffffff !important;
    font-weight: bold;
    font-size: 20px !important;
    font-family: 'Montserrat', sans-serif;
  }

  &_user {
    margin: 0 20px;

    &_icon {
      color: #fff !important;
    }
  }
}
</style>

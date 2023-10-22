<template>
  <div>
    <div v-if="isLogged()" @click="toggleMenu" class="user_button">
      <p class="user_button_name">{{ getActualUser()?.name }}</p>
      <img :src="getIcon('user')" />
      
      <Menu v-if="showMenu">
        <router-link to="/profile">
          Perfil
        </router-link>

        <router-link to="/admin/pizzas">
          Administrador
        </router-link>

        <router-link to="/" @click="doLogout">
          Sair
        </router-link>
      </Menu>
    </div>

    <router-link
      v-else
      to="/login"
      class="login_button"
      @click="scrollToTop"
    >
      Login
    </router-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useSessionStore } from '@/stores/session';
import { mapGetters, mapActions } from 'pinia';
import Menu from '@/components/Menu.vue';
import helper from '@/helper';

export default defineComponent({
  components: {
    Menu
  },
  data: () => ({
    username: '',
    showMenu: false
  }),
  methods: {
    ...mapGetters( useSessionStore, ['getActualUser', 'isLogged']),
    ...mapActions( useSessionStore, ['clearSession']),
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu(e: Event) {
      if (!this.$el.contains(e.target)) {
        this.showMenu = false
      }
    },
    doLogout() {
      this.clearSession()
    },
    scrollToTop() {
      helper.scrollToTop()
    },
    getIcon(url: string) {
      return helper.getIcon(url)
    }
  },
  mounted () {
    document.addEventListener('click', this.closeMenu)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.closeMenu)
  }
})

</script>

<style lang="scss" scoped>
.user_button {
  height: 50px;
  width: 150px;
  border-radius: 10px;

  position: relative;

  background-color: $text-light;
  transition: background-color 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: $text-dark;
  font-size: 18px;
  user-select: none;

  cursor: pointer;

  &_name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 85px;
  }
}

.login_button {
  height: 50px;
  width: 150px;

  background-color: $primary-color;
  transition: background-color 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  color: $text-light;
  font-weight: bold;
  font-size: 24px;

  text-decoration: none;

  &:hover {
    background-color: $primary-darker;
    transition: background-color 0.2s ease-in-out;
  }
}
</style>
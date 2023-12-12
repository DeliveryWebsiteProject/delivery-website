<template>
  <div>
    <Header />
    <div class="cards">
      <div class="cards_west">
        <!-- <div class="filter card">
          <h2>Filtros</h2>
          To be Implemented
        </div> -->
        <div class="menu card">
          <h2>Administração</h2>
          <ul class="menu_list">
            <li
              v-for="menuItem in menuItems"
              :class="{ 'menu_list_item': selected !== menuItem.option, 'menu_list_selected': selected === menuItem.option }"
              @click="selectOption(menuItem.option)"
            >
              {{ menuItem.label }}
            </li>
          </ul>
        </div>
      </div>

      <router-view class="content card" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import { mapActions } from 'pinia';
import { useSettingsStore, useOrderStore, usePizzaStore, useUserStore } from '@/stores';

export default defineComponent({
  components: {
    Header,
  },
  async mounted() {
    const option = this.$route.path.split('/admin/')[1];

    if (!this.selected) {
      this.selectOption('settings')
    }

    if (option !== this.selected) {
      this.selectOption(option)
    }

    await this.fetchSettings(),
    await this.fetchOrders(),
    await this.fetch(),
    await this.fetchUser()
  },
  data: () => ({
    selected: '',
    menuItems: [
      { label: 'Configurações', option: 'settings' },
      { label: 'Pedidos',       option: 'orders'   },
      { label: 'Pizzas',        option: 'pizzas'   },
      { label: 'Usuários',      option: 'users'    },
    ]
  }),
  methods: {
    ...mapActions(useSettingsStore, ['fetchSettings']),
    ...mapActions(useOrderStore, ['fetchOrders']),
    ...mapActions(usePizzaStore, ['fetch']),
    ...mapActions(useUserStore, ['fetchUser']),
    selectOption(option: string) {
      this.selected = option

      this.$router.push('/admin/' + option)
    },
  }
})
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  padding-top: 8vh;

  display: flex;
  // align-items: center; // Descomentar ao aplicar filtros
  justify-content: center;
  flex-direction: row;

  &_west {
    display: flex;
    flex-direction: column;

    width: 320px;

    color: $text-light;
  }
}

.filter {
  height: 400px;
}

.menu {
  height: 100%;

  &_list {
    display: flex;
    flex-direction: column;

    gap: 15px;
    padding: 15px 10px;

    list-style: none;
    font-size: 20px;
    
    &_item:hover {
      color: $primary-color;
      cursor: pointer;
    }

    &_selected {
      color: $primary-color;
      font-weight: bold;
    }
  }
}

.card {
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: $card-color;
  box-shadow: $box-shadow;
}
</style>

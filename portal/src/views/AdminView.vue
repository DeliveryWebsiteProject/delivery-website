<template>
  <div>
    <Header />
    <div class="cards">
      <div class="cards_west">
        <div class="filter card">
          <h2>Filtros</h2>
          <!-- To be Implemented -->
        </div>
        <div class="menu card">
          <h2>Administração</h2>
          <ul class="menu_list">
            <li
              v-for="menuItem in menuItems"
              :class="{ 'menu_list_item': selectedOption !== menuItem.option, 'menu_list_selected': selectedOption === menuItem.option }"
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

export default defineComponent({
  components: {
    Header,
  },
  data: () => ({
    selectedOption: 'pizzas',
    menuItems: [
      { label: 'Pedidos',      option: 'requests' },
      { label: 'Pizzas',       option: 'pizzas'   },
      { label: 'Usuários',     option: 'users'    },
      { label: 'Relatórios',   option: 'reports'  },
    ]
  }),
  methods: {
    selectOption(option: string) {
      this.selectedOption = option

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
  align-items: center;
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
  height: 275px;

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

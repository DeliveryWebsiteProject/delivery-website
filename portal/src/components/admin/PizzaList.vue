<template>
  <div>
    <ul class="pizzas">
      <li v-for="pizza in getPizzas()">
        <div class="pizza">
          <div class="pizza_content">
            <p class="pizza_name">{{ pizza.name }}</p>
            <div>
              <div>
                <span>Valor: </span>
                <span class="pizza_price">R${{ pizza.price }},00</span>
              </div>
              <div>
                <span>Categoria: </span>
                <span>{{ pizza.category ? 'Doce' : 'Salgada' }}</span>
              </div>
            </div>
            <div class="pizza_actions">
              <img :src="$getIcon('edit')" @click="openEdit(pizza)">
              <img :src="$getIcon('delete')" @click="openDelete(pizza)">
            </div>
            <PizzaEditor v-if="toggleMenu" :edit="true" :toggle-popup="toggleMenuPopup"  />
            <Confirm v-if="toggleConfirm" :confirm="confirmDelete" :toggle-popup="toggleConfirmPopup" />
          </div>
          <img class="pizza_photo" :src="$getImage(pizza.photo, 'default.png')">
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePizzaStore } from '@/stores/pizza';
import { mapGetters, mapActions } from 'pinia';
import { Pizza } from '@/models';
import PizzaEditor from '@/components/PizzaEditor.vue';
import Confirm from '@/components/Confirm.vue';

export default defineComponent ({
  components: {
    PizzaEditor,
    Confirm,
  },
  data: () => ({
    toggleMenu: false,
    toggleConfirm: false,
  }),
  methods: {
    ...mapGetters( usePizzaStore, ['getPizzas']),
    ...mapActions( usePizzaStore, ['setSelectedPizza', 'clearSelectedPizza', 'editPizza', 'deletePizza']),

    openEdit(pizza: Pizza) {
      this.setSelectedPizza(pizza) 
      this.toggleMenuPopup()
    },
    openDelete(pizza: Pizza) {
      this.toggleConfirmPopup()
      this.setSelectedPizza(pizza)
    },
    confirmDelete() {
      this.deletePizza()
      this.clearSelectedPizza()
      this.toggleConfirmPopup()
    },
    toggleMenuPopup() {
      this.toggleMenu = !this.toggleMenu
    },
    toggleConfirmPopup() {
      this.toggleConfirm = !this.toggleConfirm
    }
  }
})
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.pizzas {
  display: grid; 
  justify-items: center;
  grid-template-columns: repeat(2, minmax(200px, 1fr)); 
  column-gap: 15px;
  row-gap: 15px;
  padding: 0 20px;
}

.pizza {
  width: 390px;
  height: 185px;

  padding: 0 20px;
  border-radius: 20px;

  background-color: $card-color-secondary;
  color: $text-light;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: $box-shadow;

  &_content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &_name {
    font-size: 22px;
    font-weight: bold;
  }

  &_price {
    color: $primary-color;
  }

  &_actions {
    display: flex;
    flex-direction: row;
    gap: 15px;

    cursor: pointer;
  }

  &_photo {
    width: auto;
    height: 135px;

    border-radius: 10px;
  }
}
</style>
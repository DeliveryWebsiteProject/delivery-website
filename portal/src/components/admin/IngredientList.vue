<template>
  <div>
    <ul class="ingredients">
      <li v-for="ingredient in getIngredients()">
        <div class="ingredient">
          <div class="ingredient_content">
            <p class="ingredient_name">{{ ingredient.name }}</p>
            <div class="ingredient_actions">
              <img :src="$getIcon('edit')" @click="openEdit(ingredient)">
              <img :src="$getIcon('delete')" @click="openDelete(ingredient)">
            </div>
            <IngredientEditor v-if="toggleMenu" :edit="true" :toggle-popup="toggleMenuPopup"  />
            <Confirm v-if="toggleConfirm" :confirm="confirmDelete" :toggle-popup="toggleConfirmPopup" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useIngredientStore } from '@/stores';
import { mapGetters, mapActions } from 'pinia';
import { Ingredient } from '@/models';
import IngredientEditor from '@/components/editors/IngredientEditor.vue';
import Confirm from '@/components/Confirm.vue';

export default defineComponent ({
  components: {
    IngredientEditor,
    Confirm,
  },
  data: () => ({
    toggleMenu: false,
    toggleConfirm: false,
  }),
  methods: {
    ...mapGetters( useIngredientStore, ['getIngredients']),
    ...mapActions( useIngredientStore, ['setSelectedIngredient', 'clearSelectedIngredient', 'editIngredient', 'deleteIngredient']),

    openEdit(ingredient: Ingredient) {
      this.setSelectedIngredient(ingredient) 
      this.toggleMenuPopup()
    },
    openDelete(ingredient: Ingredient) {
      this.toggleConfirmPopup()
      this.setSelectedIngredient(ingredient)
    },
    confirmDelete() {
      this.deleteIngredient()
      this.clearSelectedIngredient()
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

.ingredients {
  display: grid; 
  justify-items: center;
  grid-template-columns: repeat(2, minmax(200px, 1fr)); 
  column-gap: 15px;
  row-gap: 15px;
  padding: 0 20px;
}

.ingredient {
  width: 390px;
  height: 70px;

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
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &_name {
    font-size: 22px;
    font-weight: bold;
  }

  &_actions {
    display: flex;
    flex-direction: row;
    gap: 15px;

    cursor: pointer;
  }
}
</style>
<template>
  <div class="content">
    <div class="content_top">
      <h1>Pizzas Cadastradas</h1>
      <button @click="togglePopup" class="add_button">
        <img :src="$getIcon('plus_light')">
      </button>
      <PizzaEditor v-if="toggleMenu" :edit="false" :toggle-popup="togglePopup" />
    </div>
    <div class="list">
      <PizzaList />
    </div>
  </div>
</template>

<script lang="ts">
import PizzaEditor from '@/components/PizzaEditor.vue';
import PizzaList from '@/components/admin/PizzaList.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    PizzaEditor,
    PizzaList
  },
  data: () => ({
    toggleMenu: false,
  }),
  methods: {
    togglePopup() {
      this.toggleMenu = !this.toggleMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  width: 900px;
  height: 750px;

  &_top {
    padding: 36px 40px;
    color: $text-light;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;

    .pizza-item {
      width: 100%;
      box-sizing: border-box;

      @media(min-width: 768px) {
        width: 50%;
      }
    }
  }
}

.add_button {
  background-color: $primary-color;
  transition: background-color 0.2s ease-in-out;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: $primary-darker;
  }
}
</style>
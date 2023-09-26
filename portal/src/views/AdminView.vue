<template>
  <div class="main">
    <Header />
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import PizzaList from '@/components/admin/PizzaList.vue';
import PizzaEditor from '@/components/PizzaEditor.vue';

export default defineComponent({
  components: {
    Header,
    PizzaEditor,
    PizzaList
  },
  data: () => ({
    toggleMenu: false
  }),
  methods: {
    togglePopup() {
      this.toggleMenu = !this.toggleMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.content {
  max-width: 940px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: $card-color;
  box-shadow: $box-shadow;

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
    max-height: 600px;
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

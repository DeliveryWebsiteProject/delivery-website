<template>
  <div>
    <div class="field">
      <select class="field_select" :name="name" :id="name" @click="openDropdown">
        <option value="">
          <!-- Adicionar nome dos itens selecionados -->
        </option>
      </select>

      <div class="field_overselect" />
    </div>
    <div class="multiselect" v-if="show">
      <ul>
        <li v-for="(option, index) in options" :key="index">
          <input type="checkbox" :id="index" :value="option.value" v-model="modelValue">
          <label :for="index">{{ option.label }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    modelValue: {
      type: [] as any[],
      default: []
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    openDropdown() {
      this.show = !this.show
    }
  },
})
</script>

<style lang="scss" scoped>
.field {
  position: relative;

  &_select {
    width: 100%;
    height: 35px;

    background-color: transparent;

    color: $text-light;
    font-size: 18px;
    font-family: 'Open Sans';

    padding-left: 5px;

    border: none;
    border-radius: 1px; // Necessário para remover outline do campo
    border-bottom: 1px solid #fff;

    &_option {
      background-color: $card-color-secondary;

      font-size: 18px;
      color: $text-light;
    }

    &:focus {
      outline: none;
      border-bottom: 1px solid $primary-color;
    }
  }

  &_overselect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.multiselect {
  position: relative;

  width: 100%;
  height: 0;

  background-color: transparent;

  color: $text-light;
  font-size: 18px;
  font-family: 'Open Sans';

  border: none;
  
  ul {
    background-color: $card-color-secondary;

    font-size: 18px;
    color: $text-light;

    list-style: none;

    border-radius: 5px;

    padding: 10px;

    li > label {
      padding-left: 10px;
    }
  }
}
</style>

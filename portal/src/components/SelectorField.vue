<template>
  <select class="select" :name="name" :id="name">
    <option
      class="select_option"
      v-for="option in options"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
  }
})
</script>

<style lang="scss" scoped>
.select {
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
</style>
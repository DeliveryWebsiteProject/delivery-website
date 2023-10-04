<template>
  <button class="btn">
    <span class="btn__text">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  background-color: $primary-color;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &__text {
    font-size: 17px;
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    background-color: $primary-darker;
  }
}
</style>

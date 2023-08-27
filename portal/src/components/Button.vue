<template>
  <div class="btn">
    <span class="btn__text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  &__text {
    font-size: 17px;
    color: #fff;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
  }
}
</style>

<template>
  <div class="menu">
    <div class="menu_inner">
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({})
</script>

<style lang="scss">
.menu {
  position: absolute;
  top: 100%;
  right: 0;

  background-color: $background-light;
  
  box-shadow: $box-shadow;

  height: auto;
  width: auto;

  text-align: right;

  margin-top: 5px;
  padding: 10px;
  border-radius: 10px;

  &_inner > * {
    padding: 0 5px;
    border-radius: 5px;
    text-decoration: none;

    color: $text-dark;

    &:hover {
      background-color: #dfdfdf;
      cursor: pointer;
    }
  }
}
</style>
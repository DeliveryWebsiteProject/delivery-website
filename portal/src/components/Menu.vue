<template>
  <div class="menu_component">
    <div class="menu_component_inner">
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({})
</script>

<style lang="scss">
.menu_component {
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
<template>
  <div class="popup">
    <div class="popup_inner">
      <slot />
      <div class="popup_inner_buttons">
        <Button :text="buttonLabel" @click="doAction()"/>
        <Button text="Fechar" @click="togglePopup()" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  components: {
    Button
  },
  props: {
    buttonLabel: {
      type: String,
      required: true
    },
    doAction: {
      type: Function,
      required: true
    },
    togglePopup: {
      type: Function,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba($color: #000000, $alpha: 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  &_inner {
    background-color: $card-color;
    padding: 32px;
    gap: 15px;

    border-radius: 10px;
    box-shadow: $box-shadow;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &_buttons {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
  }

}
</style>
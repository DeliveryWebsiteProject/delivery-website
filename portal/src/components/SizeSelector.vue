<template>
  <div class="selector">
    <font-awesome-icon
      class="selector_arrow left"
      icon="fa-solid fa-chevron-left"
      @click="change(false)"
    />

    <p class="selector_size">{{ selected }}</p>

    <font-awesome-icon
      class="selector_arrow right"
      icon="fa-solid fa-chevron-right"
      @click="change(true)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sizes from '../models/Size'

export default defineComponent({
  data() {
    return {
      selected: Sizes.MEDIUM
    }
  },
  methods: {
    change(increasing: boolean) {
      this.selected = Sizes.changeSize(this.selected, increasing)
    }
  }
})
</script>

<style lang="scss">
.selector {
  width: 150px;
  height: 35px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;

  &_arrow {
    position: absolute;
    width: 12px;
    cursor: pointer;

    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
  }

  .left {
    left: 5px;
  }

  .right {
    right: 5px;
  }

  &_size {
    font-size: 17px;
    font-weight: bold;
  }
}
</style>

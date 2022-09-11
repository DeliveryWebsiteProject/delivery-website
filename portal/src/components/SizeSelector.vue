<template>
  <div class="container">
    <div class="selector">
      <font-awesome-icon
      class="selector_arrow left"
      icon="fa-solid fa-chevron-left"
      @click="change(false)"
      />
      
      <span class="selector_size">{{ selected }}</span>
      
    <font-awesome-icon
    class="selector_arrow right"
      icon="fa-solid fa-chevron-right"
      @click="change(true)"
      />
    </div>
    <div class="peoples">
      <div class="peoples_icon">
        <font-awesome-icon icon="fa-solid fa-users" size="xs"/>
      </div>
      <span class="peoples_number" >{{ selected.peoples }}</span>
    </div>
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
.container {
  gap: 12px;
}

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

.peoples {
  width: 65px;
  height: 35px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &_icon {
    background: #D9D9D9;
    border-radius: 100%;
    width: 33px;
    height: 33px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2px;
  }

  &_number {
    margin: auto;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>

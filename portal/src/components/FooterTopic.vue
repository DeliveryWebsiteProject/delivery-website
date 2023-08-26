<template>
  <div class="links">
    <div>
      <p class="links_title">{{ title }}</p>
      <div class="links_content">
        <div class="links_content_line" />
        <ul>
          <li v-for="item in items" :key="item" class="links_content_item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array as PropType<string[]>,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.links {
  &_title {
    color: #378c3b;
    font-weight: 900;
    font-size: 20pt;
  }

  &_content {
    display: flex;
    flex-direction: row;

    &_line {
      width: 2px;
      height: auto;
      margin: 5px 10px 0 2px;
      background-color: #378c3b;
    }

    &_item {
      color: #fff;

      font-size: 16px;
      margin: 5px;

      list-style: none;
    }

    &_item:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>

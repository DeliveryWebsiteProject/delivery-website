<template>
  <div class="links">
    <div>
      <p class="links_title">{{ title }}</p>
      <div class="links_content">
        <div class="links_content_line" />
        <ul>
          <li v-for="item in items" :key="item.name">
            <a class="links_content_item" :href="item.url.startsWith('/') ? '#' + item.url.slice(1) : item.url" 
               :target="isInternalLink(item.url) ? '' : '_blank'">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  methods: {
    isInternalLink(url: string): boolean {
      return url.startsWith('/');
    }
  }
})
</script>

<style scoped lang="scss">

.links {
  &_title {
    color: #378c3b;
    font-weight: 900;
    font-size: 20pt;
  }

  &_subtitle {
    white-space: nowrap;
  }

  &_content {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    &_line {
      width: 2px;
      height: auto;
      margin: 5px 10px 0 2px;
      background-color: #378c3b;
    }

    ul {
      list-style-type: none;
    }

    &_item {
      color: #fff;
      font-size: 16px;
      margin: 5px;
      margin-top: 50px;
      list-style: none;
      text-decoration: none;
    }

    &_item:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>

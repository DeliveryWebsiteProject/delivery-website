<template>
  <div class="content">
    <h1 class="content_top">Configurações</h1>

    <form>
      <div class="tabs">
        <div class="tab" v-for="(label, index) in tabs">
          <p @click="selectTab(index)" :class="{'tab_selected': selectedTab === index, 'tab_normal': selectedTab !== index }">
            {{ label }}
          </p>
        </div>
      </div>

      <GeneralTab v-if="!selectedTab" />
      <MessagesTab v-else />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GeneralTab from '@/components/admin/GeneralTab.vue';
import MessagesTab from '@/components/admin/MessagesTab.vue';
import Button from '@/components/Button.vue';

export default defineComponent({
  components: {
    GeneralTab,
    MessagesTab,
    Button,
  },
  data: () => ({
    tabs: [
      'Geral',     
      'Mensagens'      
    ],
    selectedTab: 0,
  }),
  methods: {
    selectTab(index: number) {
      this.selectedTab = index
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  width: 900px;
  height: 750px;

  &_top {
    padding: 36px 40px;
    color: $text-light;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 15px;
  gap: 30px;
}

.tabs {
  display: flex;
  flex-direction: row;

  gap: 30px;
}

.tab {
  cursor: pointer;

  position: relative;

  & p {
    color: $text-light;
    font-weight: bold;
    font-size: 16pt;
  }

  &_selected {
    &::after {
      content: '';

      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;
      height: 3px;

      border-radius: 5px;
      background: $primary-color;
    }
  }

  &_normal {
    &::after {
      content: '';

      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;
      height: 3px;

      border-radius: 5px;
      background: $primary-color;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 200ms ease-in;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>
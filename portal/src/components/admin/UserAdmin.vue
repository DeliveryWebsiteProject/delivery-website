<template>
  <div class="content">
    <div class="content_top">
      <h1>Usuários Cadastrados</h1>
    </div>
    <div class="list">
      <UserList />
    </div>
  </div>
</template>

<script lang="ts">
import UserEditor from '@/components/editors/UserEditor.vue';
import UserList from '@/components/admin/UserList.vue';
import helper from '@/helper';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UserEditor,
    UserList
  },
  data: () => ({
    toggleMenu: false,
  }),
  methods: {
    togglePopup() {
      this.toggleMenu = !this.toggleMenu
    },
    getIcon(url: string) {
      return helper.getIcon(url)
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

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
  }
}

.add_button {
  background-color: $primary-color;
  transition: background-color 0.2s ease-in-out;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: $primary-darker;
  }
}
</style>
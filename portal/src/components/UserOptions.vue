<template>
  <div class="text-center">
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" link>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [
      { title: 'Perfil' },
      { title: 'Admin' },
      { title: 'Opções' },
      { title: 'Sair' }
    ]
  })
}
</script>

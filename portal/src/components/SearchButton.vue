<template>
  <div class="search-button">
    <div class="search-icon">
      <img :src="$getIcon('search')" />
    </div>
    <input
      type="text"
      class="search-input"
      placeholder="Pesquisa"
      v-model="searchQuery"
      @input="$emit('pesquisa', searchQuery)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchButton',
  props: {
    value: String
  },
  data() {
    return {
      searchQuery: (this as any).value || ''
    }
  }
}
</script>

<style scoped lang="scss">
.search-button {
  display: flex;
  align-items: center;
  background: $background-dark;
  border-radius: 10px;
  padding: 5px;
  border: 2px solid $button-dark;
}

.search-input {
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  margin-left: 20px;
  font-size: 17px;
}

.search-icon {
  margin-left: 5px;
}
</style>

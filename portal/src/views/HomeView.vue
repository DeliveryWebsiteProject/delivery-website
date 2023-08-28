<template>
  <div>
    <div>
      <Header />
      <img class="banner" src="../assets/images/home_background.png" />
    </div>
    <div class="contents">
      <MostRequested />
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import MostRequested from '@/components/home/MostRequested.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Header,
    MostRequested
  }
})
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
}

.contents {
  display: flex;
  justify-content: center;
}
</style>

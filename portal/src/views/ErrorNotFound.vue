<template>
  <div class="error_page">
    <div class="error">
      404
    </div>

    <div class="message">
      Oops. Nada aqui...
    </div>

    <router-link class="button" to="/">
      <Button text="Ir para Home" />
    </router-link>
  </div>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';

export default {
  components: {
    Button
  }  
}
</script>

<style scoped lang="scss">
.error_page {
  color: #fff;

  height: 90vh;

  gap: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error {
  font-size: 30vh;
}

.message {
  opacity: 0.4;
}

.button {
  text-decoration: none;
}
</style>
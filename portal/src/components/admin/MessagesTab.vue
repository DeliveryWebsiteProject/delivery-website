<template>
  <form>
    <div class="messages">
      <TextAreaField
        name="Boas-vindas"
        :placeholder="'Digite aqui...'"
        :required="true"
        v-model="welcome"
      />
      <TextAreaField
        name="Pedido Iniciado"
        :placeholder="'Digite aqui...'"
        :required="true"
        v-model="begin"
      />
      <TextAreaField
        name="Pedido Finalizado"
        :placeholder="'Digite aqui...'"
        :required="true"
        v-model="finish"
      />
    </div>
  </form>
</template>

<script lang="ts">
import TextAreaField from '@/components/TextAreaField.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    TextAreaField
  },
  data: () => ({
    welcome: '',
    begin: '',
    finish: ''
  }),
})
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 15px;
  gap: 30px;
}
</style>
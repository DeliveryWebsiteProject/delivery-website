<template>
  <div class="form_container">
    <form class="register_form" @submit="register">
      <BaseTextField name="Nome" />
      <BaseTextField
        name="Cpf"
        placeholder="###.###.###-##"
        mask="###.###.###-##"
      />
      <BaseTextField
        name="Telefone"
        placeholder="(##) #####-####"
        mask="(##) #####-####"
      />
      <BaseTextField name="Endereço" />
      <Button class="register_form__btn" type="submit" text="Criar" />
    </form>
  </div>
</template>

<script lang="ts">
import BaseTextField from '@/components/BaseTextField.vue'
import Button from '@/components/Button.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    BaseTextField,
    Button
  },
  data() {
    return {
      cpf: null,
      password: null
    }
  },
  methods: {
    async register() {
      console.log('login')
    }
  }
})
</script>

<style scoped lang="scss">
.form_container {
  padding: 3em 3em 1em 3em;
  background: #c4c4c420;
  border-radius: 12px;
  width: 400px;
  margin: 10% auto;
}

.register_form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__btn {
    width: 50%;
    margin-top: 1em;
  }
}
</style>

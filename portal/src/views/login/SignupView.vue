<template>
  <div class="form_container">
    <form class="register_form" @submit="register">
      <BaseTextField name="Nome" v-model="name" />
      <BaseTextField name="Senha" type="password" v-model="password" />
      <BaseTextField
        name="Cpf"
        placeholder="###.###.###-##"
        mask="###.###.###-##"
        v-model="cpf"
      />
      <BaseTextField
        name="Telefone"
        placeholder="(##) #####-####"
        mask="(##) #####-####"
        v-model="phone"
      />
      <BaseTextField name="Endereço" :required="false" v-model="address" />
      <span class="register_form__error">{{ error }}</span>
      <Button class="register_form__btn" type="submit" text="Criar" />
    </form>
  </div>
</template>

<script lang="ts">
import BaseTextField from '@/components/BaseTextField.vue'
import Button from '@/components/Button.vue'
import { defineComponent } from 'vue'
import { User } from '@/models'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

export default defineComponent({
  components: {
    BaseTextField,
    Button
  },
  data() {
    return {
      name: '',
      cpf: '',
      password: '',
      address: '',
      phone: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['addUser']),
    async register(event: Event) {
      event?.preventDefault()

      this.error = ''

      const user: User = {
        name: this.name,
        cpf: this.cpf,
        password: this.password,
        address: this.address,
        phone: this.phone
      }

      this.addUser(user)
        .then((body) => {
          if (body) {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          this.error = err.response.data.error
        })
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

  &__error {
    color: rgb(253, 120, 120);
    height: 15px;
    font-size: 11px;
  }
}
</style>

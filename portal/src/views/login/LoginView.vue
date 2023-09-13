<template>
  <div class="form_container">
    <form class="login_form" @submit.prevent="login">
      <BaseTextField
        name="Cpf"
        placeholder="###.###.###-##"
        mask="###.###.###-##"
        v-model="cpf"
      />
      <BaseTextField name="Senha" type="password" v-model="password" />
      <Button class="login_form__btn" type="submit" text="Login" />
    </form>
    <div class="signup">
      <span>
        Ainda não se registrou?
        <router-link class="signup__link" to="/signup" @click="$scrollToTop">
          Crie uma conta
        </router-link>
        .
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import BaseTextField from '@/components/BaseTextField.vue'
import Button from '@/components/Button.vue'
import SessionService from '@/services/SessionService'
import { mapActions } from 'pinia'
import { useSessionStore } from '@/stores/session'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    BaseTextField,
    Button
  },
  data() {
    return {
      cpf: undefined,
      password: undefined,
      loading: false,
      showError: false
    }
  },
  methods: {
    ...mapActions(useSessionStore, ['setToken', 'updateActualUser']),
    async login() {
      if (this.cpf && this.password) {
        SessionService.login(this.cpf, this.password)
          .then((result) => {
            this.setToken(result?.token ?? '')
            this.updateActualUser()

            this.$router.push('/')
          })
          .catch((err) => {
            this.showError = true

            throw err
          })
      } else {
        this.loading = false
      }
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

.login_form {
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

.signup {
  color: $text-light;
  font-size: 12px;
  margin-top: 0.5em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__link {
    color: #316dca;
  }
}
</style>

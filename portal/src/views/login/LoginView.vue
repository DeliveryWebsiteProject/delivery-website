<template>
  <div class="background-image">
    <img class="banner" :src="$getImage('login_background.png')" />
  </div>
  <div class="form_container">
    <form class="login_form" @submit.prevent="doLogin">
      <BaseTextField
        name="Cpf"
        placeholder="###.###.###-##"
        mask="###.###.###-##"
        v-model="cpf"
      />
      <BaseTextField name="Senha" type="password" v-model="password" />
      <span class="login_form__error">{{ error }}</span>
      <Button class="login_form__btn" type="submit" text="Login" />
    </form>
    <div class="signup">
      <span>
        Ainda não se registrou?
        <router-link class="signup__link" to="/signup" @click="$scrollToTop">
          Crie uma conta
        </router-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import BaseTextField from '@/components/BaseTextField.vue'
import Button from '@/components/Button.vue'
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
      error: ''
    }
  },
  methods: {
    ...mapActions(useSessionStore, ['login']),
    async doLogin() {
      this.loading = true

      if (this.cpf && this.password) {
        this.login(this.cpf, this.password, (err) => {
          if (err) {
            this.error = err.response.data.error
          } else {
            this.$router.push('/')
          }
        })
      }

      this.loading = false
    }
  }
})
</script>

<style scoped lang="scss">
.form_container {
  position: relative;
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 65%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login_form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__btn {
    width: 100%;
    margin-top: 1em;
  }

  &__error {
    color: rgb(253, 120, 120);
    height: 15px;
    font-size: 11px;
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
    color: $primary-color;
  }
}
</style>

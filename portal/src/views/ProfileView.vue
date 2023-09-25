<template>
  <div>
    <Header />
    <div class="form_container">
      <form class="update_form">
        <BaseTextField name="Nome" v-model="name" :initial-value="name" />
        <BaseTextField
          name="Telefone"
          placeholder="(##) #####-####"
          mask="(##) #####-####"
          v-model="phone"
        />
        <BaseTextField name="Endereço" :required="false" v-model="address" />
        <span class="update_form__error">{{ error }}</span>
        <div class="button-container">
          <Button
            class="update_form__btn"
            type="submit"
            text="Atualizar dados"
            @click="updateUser"
          />
        </div>
      </form>

      <button class="delete_account_btn" @click="toggleConfirmPopup">
        Excluir conta
      </button>

      <Confirm v-if="toggleConfirm" :confirm="confirmDelete" :toggle-popup="toggleConfirmPopup" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseTextField from '@/components/BaseTextField.vue'
import Button from '@/components/Button.vue'
import Header from '@/components/Header.vue'
import Confirm from '@/components/Confirm.vue'
import { User } from '@/models'
import { mapGetters, mapActions } from 'pinia'
import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'

export default defineComponent({
  components: {
    BaseTextField,
    Header,
    Button,
    Confirm
  },
  data: () => ({
    id: '',
    name: '',
    phone: '',
    address: '',
    error: '',
    toggleConfirm: false,
  }),
  mounted() {
    const user = this.getActualUser()

    if (user) {
      this.id = user.id ?? ''
      this.name = user.name ?? ''
      this.phone = user.phone ?? ''
      this.address = user.address ?? ''
    }
  },
  methods: {
    ...mapGetters(useSessionStore, ['getActualUser']),
    ...mapActions(useSessionStore, ['clearSession', 'fetch']),
    ...mapActions(useUserStore, ['editUser', 'deleteUser']),
    getUser() {
      const user: User = {
        id: this.id,
        name: this.name,
        phone: this.phone,
        address: this.address,
      }

      return user
    },
    async updateUser(event: Event) {
      event?.preventDefault()

      this.editUser(this.getUser())
        .then((body) => {
          this.fetch(body)
        })
        .catch((err) => {
          this.error = err.response.data.error
        })
    },
    confirmDelete() {
      this.deleteUser(this.getUser())
        .then(() => {
          this.$router.push('/')
          this.clearSession()
        })
        .catch((err) => {
          this.error = err.response.data.error
        })
        .finally(() => {
          this.toggleConfirmPopup()
        })
    },
    toggleConfirmPopup() {
      this.toggleConfirm = !this.toggleConfirm
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

  display: flex;
  flex-direction: column;
  align-items: center;
}

.update_form {
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

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
  }
}

.delete_account_btn {
  background: none;
  border: none;
  color: #ac1010;
  margin-top: 1.5em;
  cursor: pointer;
}
</style>

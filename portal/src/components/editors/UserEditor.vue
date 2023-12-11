<template>
  <Popup
    :button-label="'Atualizar'"
    :toggle-popup="togglePopup"
  >
    <h2>Informações do Usuário</h2>

    <form>
      <div class="col">
        <BaseTextField name="Nome" v-model="name" :disabled="true" />
        <BaseTextField name="CPF" mask="###.###.###-##" v-model="cpf" :disabled="true" />
      </div>
      <div class="col">
        <BaseTextField name="Telefone" mask="(##) #####-####" v-model="phone" :disabled="true" />
        <BaseTextField name="Endereço" v-model="address" :disabled="true" />
      </div>
    </form>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores'
import { mapState } from 'pinia'
import Popup from '@/components/Popup.vue'
import BaseTextField from '@/components/BaseTextField.vue'
import TextAreaField from '@/components/TextAreaField.vue'

export default defineComponent({
  components: {
    Popup,
    BaseTextField,
    TextAreaField,
  },
  props: {
    togglePopup: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    id: '',
    name: '',
    cpf: '',
    phone: '',
    address: '',
    error: '',
  }),
  mounted() {
    const user = this.getSelectedUser()

    if (user) {
      this.id = user.id?.toString() ?? ''
      this.name = user.name?.toString() ?? ''
      this.cpf = user.cpf?.toString() ?? ''
      this.phone = user.phone?.toString() ?? ''
      this.address = user.address?.toString() ?? ''
    }
  },
  methods: {
    ...mapState(useUserStore, ['getSelectedUser']),
  }
})
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
}

.col {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 15px 0;
}
</style>

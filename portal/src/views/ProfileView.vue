<template>
  <Header />
  <div class="profile">
    <div class="profile_header">
      <img :src="getIcon('profile')" />
      <h2 class="profile_name">{{ name }}</h2>
    </div>
    <div class="profile_buttons">
      <Button v-for="(text, index) in profileOptions" :key="index" :text="text" class="button-item" :class="{
        'button-black': selectedOption !== index,
        'button-green': selectedOption === index
      }" @click="selectOption(index)" />
    </div>
    <div class="data-container">
      <div class="profile_data" v-show="selectedOption === 0">
        <div class="profile_data_column">
          <CustomTextField name="Nome" v-model="name" :icon="getIcon('profile')"  />
          <CustomTextField name="Telefone" v-model="phone" :icon="getIcon('phone')" mask="(##) #####-####" />
        </div>
        <div class="profile_data_column">
          <CustomTextField name="CPF" v-model="cpf" :icon="getIcon('cpf')" mask="###.###.###-##"  />
          <CustomTextField name="Senha" v-model="pass" :icon="getIcon('password')" />
        </div>
      </div>
      <div class="address_data" v-show="selectedOption === 1">
        <AddressCard v-for="address in addresses" :key="address.title" :address="address" class="address" />
      </div>
      <div class="order_data" v-show="selectedOption === 2">
        <OrderCard v-for="order in orders" :key="order.date" :order="order" class="order" />
      </div>
    </div>
    <div class="button_save" v-if="selectedOption !== 2">
      <Button :text="selectedOption === 1 ? 'Adicionar endereço' : 'Salvar alterações'"
        @click="selectedOption === 1 ? addAddress() : updateUser()" />
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import CustomTextField from '@/components/CustomTextField.vue'
import AddressCard from '@/components/AddressCard.vue'
import OrderCard from '@/components/OrderCard.vue'
import helper from '@/helper'
import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'
import { User } from '@/models'
import { mapGetters, mapActions } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CustomTextField,
    AddressCard,
    OrderCard,
    Header,
    Button
  },
  data() {
    return {
      profileOptions: ['Dados', 'Endereços', 'Pedidos'],
      selectedOption: 0,

      id: '',
      name: '',
      phone: '',
      cpf: '',
      pass: '',
      role: 0,
      state: 0,

      error: '',

      toggleConfirm: false,
      addresses: [
        {
          type: 'Casa',
          title: 'Minha Casa',
          street: 'Rua Exemplo, 123',
          city: 'Cidade Exemplo',
        },
        {
          type: 'Trabalho',
          title: 'Meu Trabalho',
          street: 'Avenida do Trabalho, 456',
          city: 'Cidade do Trabalho',
        }
      ],
      orders: [
        {
          date: '10/11',
          state: 'Pedido em rota de entrega',
          price: '57',
        },
        {
          date: '04/11',
          state: 'Pedido concluído',
          price: '59',
        }
      ],
    }
  },
  mounted() {
    const user = this.getActualUser()

    if (user) {
      this.id = user.id ?? ''
      this.name = user.name ?? ''
      this.phone = user.phone ?? ''
      this.cpf = user.cpf ?? ''
      this.pass = user.password ?? ''
      this.role = user.role ?? 0
      this.state = user.state ?? 0
    }
  },
  methods: {
    ...mapGetters(useSessionStore, ['getActualUser']),
    ...mapActions(useSessionStore, ['clearSession', 'fetch']),
    ...mapActions(useUserStore, ['editUser', 'fetchUser']),
    getUser() {
      const user: User = {
        id: this.id,
        cpf: this.cpf,
        name: this.name,
        phone: this.phone,
        password: this.pass,
        role: this.role,
        state: this.state
      }

      return user
    },
    async updateUser() {
      await this.editUser(this.getUser())
            .then((body) => {
              this.fetch(body)
              this.fetchUser()
            })
            .catch((err) => {
              this.error = err.response.data.error
            })
    },
    addAddress() {
      console.log('Adicionando endereço...');
    },
    toggleConfirmPopup() {
      this.toggleConfirm = !this.toggleConfirm
    },
    selectOption(index: number) {
      this.selectedOption = index;
    },
    getIcon(url: string) {
      return helper.getIcon(url);
    },
  }
})
</script>

<style scoped lang="scss">
.profile {
  margin-top: 10%;
  text-align: center;

  &_header {
    margin-bottom: 50px;
  }

  &_name {
    margin-top: 15px;
    color: $text-light;
    font-weight: 500;
  }

  &_icon {
    width: 100px;
    height: 100px;
  }

  &_buttons {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  &_data {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin: 3% 25% 0% 25%;

    &_column {
      width: 100%;
    }
  }
}

.button_save {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.button_save Button {
  min-width: 50%;
}

.button-black {
  background-color: $button-dark;
  color: $text-light;
}

.button-green {
  background-color: $primary-color;
  color: $text-light;
}

.button-item {
  min-width: 14%;
  min-height: 4em;
  margin: 0 2%;
}

.order_data {
  margin: 3% 25% 0% 25%;
}

.address_data {
  margin: 3% 25% 0% 25%;
}
</style>

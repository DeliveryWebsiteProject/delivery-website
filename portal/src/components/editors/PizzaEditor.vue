<template>
  <Popup
    :button-label="title"
    :do-action="edit ? updatePizza : createPizza"
    :toggle-popup="togglePopup"
  >
    <h2>{{ title }} Pizza</h2>

    <BaseTextField name="Nome" v-model="name" :required="false" />
    <BaseTextField name="Preço" v-model="price" type="number" :required="false" />
    <PizzaCategorySelector v-model="category" :required="false" />
    <BaseTextField name="Foto" v-model="photo" :required="false" />
    <span class="error">{{ error }}</span>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePizzaStore } from '@/stores'
import { mapGetters, mapActions } from 'pinia'
import { Pizza, Category, State } from '@/models'
import PizzaCategorySelector from '@/components/PizzaCategorySelector.vue'
import Popup from '@/components/Popup.vue'
import BaseTextField from '@/components/BaseTextField.vue'

export default defineComponent({
  components: {
    Popup,
    BaseTextField,
    PizzaCategorySelector
  },
  props: {
    edit: {
      type: Boolean,
      required: true
    },
    togglePopup: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    title: '',
    id: '',
    name: '',
    price: '',
    category: 0,
    ref_photo: '',
    error: ''
  }),
  mounted() {
    if (this.edit) {
      this.title = 'Editar'

      const pizza = this.getSelectedPizza()

      if (pizza) {
        this.id = pizza.id?.toString() ?? ''
        this.name = pizza.name
        this.price = pizza.price.toString()
        this.category = pizza.category
        this.ref_photo = pizza.ref_photo ?? ''
      }
    } else {
      this.title = 'Adicionar'

      this.name = ''
      this.price = ''
      this.category = 0
      this.ref_photo = ''
    }
  },
  methods: {
    ...mapGetters(usePizzaStore, ['getSelectedPizza']),
    ...mapActions(usePizzaStore, ['addPizza', 'editPizza', 'fetch']),
    async createPizza() {
      const category = Number(this.category) ? Category.SWEET : Category.SALTY

      const pizza: Pizza = {
        name: this.name,
        price: Number(this.price),
        category: category,
        ref_photo: this.ref_photo,
        state: State.ACTIVE
      }

      await this.addPizza(pizza)
        .then((res) => {
          this.fetch()
          this.togglePopup()
        })
        .catch((err) => {
          this.error = err.response.data.error
        })
    },
    async updatePizza() {
      const category = Number(this.category) ? Category.SWEET : Category.SALTY

      const pizza: Pizza = {
        id: this.id,
        name: this.name,
        price: Number(this.price),
        category: category,
        ref_photo: this.ref_photo,
        state: State.ACTIVE
      }

      await this.editPizza(pizza)
      this.fetch()
      this.togglePopup()
    }
  }
})
</script>

<style scoped lang="scss">
.error {
  color: $error;
  height: 15px;
  font-size: 11px;
}
</style>

<template>
  <Popup
    :button-label="title"
    :do-action="edit ? updatePizza : createPizza"
    :toggle-popup="togglePopup"
  >
    <h2>{{ title }} Pizza</h2>

    <form>
      <div class="col">
        <BaseTextField name="Nome" v-model="name" :required="true" />
        <PizzaCategorySelector v-model="category" :required="true" />
        <BaseTextField name="Preço" v-model="price" type="number" :required="true" />
      </div>

      <TextAreaField
        name="Descrição"
        v-model="description"
        :placeholder="'Digite aqui...'"
        :required="true"
      />

      <FilePicker @changeFiles="changeFiles" />
    </form>
    <span class="error">{{ error }}</span>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePizzaStore } from '@/stores'
import { mapState, mapActions } from 'pinia'
import { Pizza, Category, State } from '@/models'
import PizzaCategorySelector from '@/components/PizzaCategorySelector.vue'
import Popup from '@/components/Popup.vue'
import BaseTextField from '@/components/BaseTextField.vue'
import TextAreaField from '@/components/TextAreaField.vue'
import FilePicker from '@/components/FilePicker.vue'

export default defineComponent({
  components: {
    Popup,
    BaseTextField,
    PizzaCategorySelector,
    TextAreaField,
    FilePicker,
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
    description: '',
    ref_photo: '',
    error: '',
    files: [] as File[]
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
        this.description = pizza.description
        
        if (pizza.path && pizza.ref_photo) {
          this.ref_photo = pizza.ref_photo
        }
      }
    } else {
      this.title = 'Adicionar'

      this.name = ''
      this.price = ''
      this.category = 0
      this.description = ''
      this.ref_photo = ''
    }
  },
  methods: {
    ...mapState(usePizzaStore, ['getSelectedPizza']),
    ...mapActions(usePizzaStore, ['addPizza', 'editPizza', 'fetch']),
    changeFiles(files: []) {
      this.files = files ?? []
    },
    async createPizza() {
      const category = Number(this.category) ? Category.SWEET : Category.SALTY

      const pizza: Pizza = {
        name: this.name,
        price: Number(this.price),
        category: category,
        description: this.description,
        ref_photo: this.ref_photo,
        state: State.ACTIVE,
      }

      await this.addPizza(pizza, this.files)
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
        description: this.description,
        ref_photo: this.ref_photo,
        state: State.ACTIVE
      }

      this.files = this.$el.querySelector('input[type="file"]')?.files

      await this.editPizza(pizza, this.files)
        .then((res) => {
          this.fetch()
          this.togglePopup()
        })
        .catch((err) => {
          this.error = err.response.data.error
        })
    },
  }
})
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 15px;
}

.col {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 15px 0;
}

.error {
  color: $error;
  height: 15px;
  font-size: 11px;
}
</style>

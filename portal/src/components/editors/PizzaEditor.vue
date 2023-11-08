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
        <BaseTextField name="Preço" v-model="price" type="number" :required="true" />
      </div>
      <div class="col">
        <PizzaCategorySelector v-model="category" :required="true" />
        <IngredientSelector v-model="ingredients" :required="true" />
      </div>
      <FilePicker @changeFiles="changeFiles" />
    </form>
    <span class="error">{{ error }}</span>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePizzaStore, usePizzaMappingStore } from '@/stores'
import { mapState, mapActions } from 'pinia'
import { Pizza, Category, State, PizzaMapping } from '@/models'
import PizzaCategorySelector from '@/components/PizzaCategorySelector.vue'
import IngredientSelector from '@/components/IngredientSelector.vue'
import Popup from '@/components/Popup.vue'
import BaseTextField from '@/components/BaseTextField.vue'
import FilePicker from '@/components/FilePicker.vue'

export default defineComponent({
  components: {
    Popup,
    BaseTextField,
    PizzaCategorySelector,
    FilePicker,
    IngredientSelector
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
    ingredients: [] as string[],
    ref_photo: '',
    error: '',
    files: [] as File[]
  }),
  mounted() {
    if (this.edit) {
      this.title = 'Editar'

      const pizza = this.getSelectedPizza()
      const ingredients = this.getSelectedPizzaMap()

      if (pizza) {
        this.id = pizza.id?.toString() ?? ''
        this.name = pizza.name
        this.price = pizza.price.toString()
        this.category = pizza.category
        
        if (pizza.path && pizza.ref_photo) {
          this.ref_photo = pizza.ref_photo
        }
      }

      if (ingredients) {
        ingredients.forEach((i) => {
          this.ingredients.push(i.ref_ingredient)
        })
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
    ...mapState(usePizzaStore, ['getSelectedPizza']),
    ...mapState(usePizzaMappingStore, ['getSelectedPizzaMap']),
    ...mapActions(usePizzaStore, ['addPizza', 'editPizza', 'fetch']),
    ...mapActions(usePizzaMappingStore, ['addPizzaMap']),
    changeFiles(files: []) {
      this.files = files ?? []
    },
    async createPizza() {
      const category = Number(this.category) ? Category.SWEET : Category.SALTY

      const pizza: Pizza = {
        name: this.name,
        price: Number(this.price),
        category: category,
        ref_photo: this.ref_photo,
        state: State.ACTIVE,
      }

      await this.addPizza(pizza, this.files)
        .then((res) => {
          this.fetch()
          this.mapIngredients(res)
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
    mapIngredients(pizza?: Pizza) {
      const pizza_id = pizza ? pizza.id : this.id

      if (pizza_id) {
        this.ingredients.forEach((i) => {
          const map: PizzaMapping = {
            ref_pizza: pizza_id,
            ref_ingredient: i
          }
  
          this.addPizzaMap(map)
        })
      }
    }
  }
})
</script>

<style scoped lang="scss">
.col {
  display: flex;
  flex-direction: row;
  gap: 45px;
  margin: 30px 0;
}

.error {
  color: $error;
  height: 15px;
  font-size: 11px;
}
</style>

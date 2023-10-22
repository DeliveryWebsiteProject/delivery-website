<template>
  <Popup
    :button-label="title"
    :do-action="edit ? updateIngredient : createIngredient"
    :toggle-popup="togglePopup"
  >
    <h2>{{ title }} Ingrediente</h2>

    <BaseTextField name="Nome" v-model="name" :required="false" />
    <span class="error">{{ error }}</span>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useIngredientStore } from '@/stores'
import { Ingredient } from '@/models'
import { mapGetters, mapActions } from 'pinia'
import Popup from '@/components/Popup.vue'
import BaseTextField from '@/components/BaseTextField.vue'

export default defineComponent({
  components: {
    Popup,
    BaseTextField,
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
    error: ''
  }),
  mounted() {
    if (this.edit) {
      this.title = 'Editar'

      const ingredient = this.getSelectedIngredient()

      if (ingredient) {
        this.id = ingredient.id?.toString() ?? ''
        this.name = ingredient.name
      }
    } else {
      this.title = 'Adicionar'

      this.name = ''
    }
  },
  methods: {
    ...mapGetters(useIngredientStore, ['getSelectedIngredient']),
    ...mapActions(useIngredientStore, ['addIngredient', 'editIngredient', 'fetch']),
    async createIngredient() {
      const ingredient: Ingredient = {
        name: this.name,
      }

      await this.addIngredient(ingredient)
        .then((res) => {
          this.fetch()
          this.togglePopup()
        })
        .catch((err) => {
          this.error = err.response.data.error
        })
    },
    async updateIngredient() {
      const ingredient: Ingredient = {
        id: this.id,
        name: this.name,
      }

      await this.editIngredient(ingredient)
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

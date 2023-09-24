<template>
  <Popup
    :button-label="title"
    :do-action="createPizza"
    :toggle-popup="togglePopup"
  >
    <h2>{{ title }} Pizza</h2>

    <BaseTextField name="Nome" v-model="name" />
    <BaseTextField name="Preço" v-model="price" />
    <BaseTextField name="Categoria" v-model="category" />
    <BaseTextField name="Foto" type="file" v-model="photo" />
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Popup from '@/components/Popup.vue';
import BaseTextField from '@/components/BaseTextField.vue';
import { usePizzaStore } from '@/stores/pizza';
import { mapGetters, mapActions } from 'pinia';
import { Pizza, Category, State } from '@/models';

export default defineComponent({
  components: {
    Popup,
    BaseTextField,
  },
  props: {
    edit: {
      type: Boolean,
      required: true,
    },
    togglePopup: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    title: '',
    name: '',
    price: '',
    category: '',
    photo: '',
  }),
  mounted() {
    const pizza = this.getSelectedPizza()

    if (pizza) {
      this.name = pizza.name
      this.price = pizza.price.toString()
      this.category = pizza.category ? 'Doce' : 'Salgada'
    }

    this.title = this.edit ? 'Editar' : 'Adicionar'
  },
  methods: {
    ...mapGetters( usePizzaStore, ['getSelectedPizza']),
    ...mapActions( usePizzaStore, ['addPizza']),
    async createPizza() {
      const category = Number(this.category) ? Category.SWEET : Category.SALTY

      const pizza: Pizza = {
        name: this.name,
        price: Number(this.price),
        category: category,
        photo: this.photo,
        state: State.ACTIVE
      }

      console.log(pizza);

      // this.addPizza(pizza)
    }
  }
})
</script>
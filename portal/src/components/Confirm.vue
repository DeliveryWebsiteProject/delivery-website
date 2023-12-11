<template>
  <Popup button-label="Confirmar" :do-action="confirm" :toggle-popup="togglePopup">
    <h2>{{ message }}</h2>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Popup from '@/components/Popup.vue';

export default defineComponent({
  components: {
    Popup,
  },
  mounted() {
    this.message = this.text ? this.text : 'Você tem certeza que quer realizar essa ação?'
  },
  data: () => ({
    message: ''  
  }),
  props: {
    text: {
      type: String,
      required: false
    },
    confirm: {
      type: Function,
      required: true
    },
    togglePopup: {
      type: Function,
      required: true
    }
  },
})
</script>

<style lang="scss" scoped>
h2 {
  color: $text-light;
}
</style>
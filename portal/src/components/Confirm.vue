<template>
  <Popup button-label="Confirmar" :do-action="confirm" :toggle-popup="togglePopup">
    <h2>Você tem certeza que quer realizar essa ação?</h2>
  </Popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Popup from '@/components/Popup.vue';

export default defineComponent({
  components: {
    Popup,
  },
  props: {
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
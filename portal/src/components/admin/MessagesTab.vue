<template>
  <form>
    <div class="messages">
      <TextAreaField
        name="Boas-vindas"
        :placeholder="'Digite aqui...'"
        :required="true"
        v-model="welcome"
      />
      <TextAreaField
        name="Pedido Iniciado"
        :placeholder="'Digite aqui...'"
        :required="true"
        v-model="start"
      />
      <TextAreaField
        name="Pedido Finalizado"
        :placeholder="'Digite aqui...'"
        :required="true"
        v-model="finish"
      />
    </div>

    <Button text="Salvar" type="submit" @click="save" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextAreaField from '@/components/TextAreaField.vue';
import Button from '@/components/Button.vue';
import { useMessagesStore } from '@/stores/messages';
import { mapGetters, mapActions } from 'pinia';
import { Messages } from '@/models';

export default defineComponent({
  components: {
    TextAreaField,
    Button
  },
  async mounted() {
    const messages = this.getMessages()

    if (messages) {
      this.welcome = messages.welcome
      this.start = messages.start
      this.finish = messages.finish
    }
  },
  data: () => ({
    welcome: '',
    start: '',
    finish: ''
  }),
  methods: {
    ...mapGetters(useMessagesStore, ['getMessages']),
    ...mapActions(useMessagesStore, ['update']),
    async save() {
      const messages: Messages = {
        welcome: this.welcome,
        start: this.start,
        finish: this.finish
      }

      await this.update(messages)
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 15px;
  gap: 30px;
}
</style>
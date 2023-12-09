<template>
  <form>
    <div class="days">
      <label>Dias de Serviço</label>
      <div class="days_buttons">
        <Button
          v-for="(label, index) in daysOfWeek"
          :key="index"
          :text="label"
          class="button-item"
          :class="{
            'button-black': !selected.includes(index),
            'button-green': selected.includes(index)
          }"
          @click="selectButton(index)"
        />
      </div>
    </div>

    <div class="time">
      <BaseTextField class="time_field" name="Início" v-model="begin" type="time" :required="true" />
      <BaseTextField class="time_field" name="Fim" v-model="end" type="time" :required="true" />
      <Button class="time_close" text="Fechar loja" @click="closeStore" />
    </div>

    <hr class="separator">

    <div class="fields">
      <BaseTextField
        class="fields_input"
        name="Celular"
        placeholder="(##) #####-####"
        mask="(##) #####-####"
        v-model="phone"
        type="text"
        :required="true"
      />
      <BaseTextField
        class="fields_input"
        name="Instagram"
        placeholder="@username"
        v-model="instagram"
        type="text"
        :required="true"
      />
    </div>

    <Button text="Salvar" @click="save" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTextField from '@/components/BaseTextField.vue';
import TextAreaField from '@/components/TextAreaField.vue';
import Button from '@/components/Button.vue';
import { Settings } from '@/models';
import { State } from '@/models/settings'
import { useSettingsStore } from '@/stores';
import { mapGetters, mapActions } from 'pinia';

export default defineComponent({
  components: {
    BaseTextField,
    TextAreaField,
    Button,
  },
  mounted() {
    const settings = this.getSettings()

    if (settings) {
      settings.days.split(',').forEach(d => {
        this.selected.push(Number(d))
      })

      this.begin = settings.begin
      this.end = settings.end
      this.state = settings.state
      this.phone = settings.phone
      this.instagram = settings.instagram
    }
  },
  data: () => ({
    daysOfWeek: [
      'Domingo',     
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',      
    ],
    selected: [] as number[],
    begin: '00:00',
    end: '00:00',
    state: 0,
    phone: '',
    instagram: '',
  }),
  methods: {
    ...mapGetters(useSettingsStore, ['getSettings']),
    ...mapActions(useSettingsStore, ['update']),
    selectButton(index: number) {
      let hasIndex = this.selected.includes(index)

      if (!hasIndex) {
        this.selected.push(index)
      } else {
        this.selected.splice(this.selected.indexOf(index), 1)
      }
    },
    closeStore() {
      this.state = State.CLOSE
    },
    async save() {
      const settings: Settings = {
        days: this.selected.join(', '),
        begin: this.begin,
        end: this.end,
        state: this.state,
        phone: this.phone,
        instagram: this.instagram,
      }

      await this.update(settings)
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

.days {
  width: 100%;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  transition: color 0.2s;

  display: flex;
  flex-direction: column;
  gap: 5px;

  &_buttons {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }
}

.button-black {
  background-color: $button-dark;
  color: $text-light;
}

.button-green {
  background-color: $primary-color;
  color: $text-light;
}

.time {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  width: 100%;

  gap: 30px;

  &_field {
    width: 35%;
  }

  &_close {
    background-color: #AC1010;
    width: 25%;
    height: 50px;
    padding: 0;

    &:hover {
      background-color: #8b0909;
    }
  }
}

.separator {
  width: 100%;
  border: 2px solid $button-dark;
  border-radius: 5px;
}

.fields {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &_input {
    width: 20em;
  }
}
</style>
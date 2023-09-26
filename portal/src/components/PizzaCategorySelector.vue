<template>
  <label :class="focus ? 'field__label field__label__focus' : 'field__label'">
    {{ 'Categoria' + (required ? ' *' : '') }}
    <SelectorField
      @focus="focus = true"
      @blur="focus = false"
      @input="updateValue"
      :name="name"
      :options="options"
      :value="modelValue"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectorField from './SelectorField.vue';
import { Category } from '@/models';

export default defineComponent({
  components: {
    SelectorField
  },
  props: {
    required: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Number,
      default: ''
    },
  },
  data: () => ({
    name: 'categories',
    options: [
      { value: Category.SALTY, label: 'Salgada' },
      { value: Category.SWEET, label: 'Doce' },
    ],
    focus: false
  }),
  methods: {
    updateValue(event: any) {
      this.$emit('update:modelValue', Number(event.target.value))
    }
  }
})
</script>

<style lang="scss" scoped>
.field {
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 15px;

  &__label {
    width: 100%;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    transition: color 0.2s;

    &__focus {
      color: $primary-color;
    }
  }
}
</style>
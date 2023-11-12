<template>
  <div class="field">
    <label :class="focus ? 'field__label field__label__focus' : 'field__label'">
      {{ name + (required ? ' *' : '') }}
      <textarea 
        rows="5"
        cols="95"
        @focus="focus = true"
        @blur="focus = false"
        @input="updateValue"
        :placeholder="placeholder"
        :value="modelValue"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTextField',
  data: () => ({
    focus: false
  }),
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: String,
      default: ''
    },
  },
  methods: {
    updateValue(event: any) {
      this.$emit('update:modelValue', event.target.value)
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

    display: flex;
    flex-direction: column;

    gap: 10px;

    &__focus {
      color: $primary-color;
    }
  }

  & textarea {
    background-color: $background-dark;
    color: $text-light;
    font-family: 'Open Sans';
    font-size: 14px;
    resize: none;

    padding: 10px;

    &:focus {
      outline: none;
      border: 1px solid $primary-color;
    }
  }
}
</style>

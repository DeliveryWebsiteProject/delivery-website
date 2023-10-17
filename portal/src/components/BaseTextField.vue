<template>
  <div class="field">
    <label :class="focus ? 'field__label field__label__focus' : 'field__label'"
      >{{ name + (required ? ' *' : '') }}
      <input
        v-maska
        class="field__input"
        @focus="focus = true"
        @blur="focus = false"
        @input="updateValue"
        :name=name
        :placeholder=placeholder
        :data-maska=mask
        :type="type || 'text'"
        :pattern="pattern"
        :value="modelValue"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTextField',
  data() {
    return {
      focus: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    mask: {
      type: String
    },
    required: {
      type: Boolean,
      default: true
    },
    modelValue: {
    },
    pattern: {
      type: String
    }
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

    &__focus {
      color: $primary-color;
    }
  }

  &__input {
    width: 100%;
    height: 30px;
    background-color: #00000000;
    color: #fff;
    font-size: 1em;
    font-family: 'Open Sans';
    letter-spacing: 0.025em;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid #fff;
    transition: border-bottom 0.2s;
    transform-origin: center;

    &:focus {
      outline: none;
      border-bottom: 1px solid $primary-color;
    }

    // Remove arrows em Inputs de type Number
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      appearance: textfield;
    }
  }
}
</style>

<template>
  <div class="field">
    <label :class="focus ? 'field__label field__label__focus' : 'field__label'">
      <div class="custom-text-field">
        <img v-if="icon" :src="icon" alt="Icon" class="icon" />
        <input
          type="text"
          v-maska="mask"
          @focus="onFocus"
          @blur="onBlur"
          @input="updateValue"
          :data-maska=mask
          :placeholder="placeholder"
          :value="modelValue"
        />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomTextField',
  data: () => ({
    focus: false,
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    mask: {
      type: String,
    },
    required: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(event: any) {
      this.$emit('update:modelValue', event.target.value);
    },
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      this.focus = false;
    },
  },
});
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

  .custom-text-field {
    position: relative;
    display: flex;
    align-items: center;
    background-color: $card-color-secondary;
    border: 2px;
    border-radius: 5px;
    padding: 16px;

    .icon {
      margin-right: 8px;
      height: 30px;
      width: 30px;
    }

    input {
      font-size: 20px;
      background-color: transparent;
      border: none;
      color: $text-light;
      outline: none;
      width: 100%;
      height: 30px;
    }
  }
}
</style>

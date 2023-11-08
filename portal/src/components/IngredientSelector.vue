<template>
  <label :class="focus ? 'field__label field__label__focus' : 'field__label'">
    {{ 'Ingredientes' + (required ? ' *' : '') }}
    <CheckboxSelectorField
      @input="updateValue"
      :name="name"
      :options="options"
      v-model="modelValue"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectorField from './SelectorField.vue';
import CheckboxSelectorField from '@/components/CheckboxSelectorField.vue'
import { useIngredientStore } from '@/stores';
import { mapGetters } from 'pinia';

export default defineComponent({
  components: {
    SelectorField,
    CheckboxSelectorField,
  },
  props: {
    required: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: [] as any[],
      default: []
    },
  },
  mounted() {
    this.getIngredients().forEach(i => {
      const ingredient = {
        value: i.id,
        label: i.name
      }

      this.options.push(ingredient)
    })
  },
  data: () => ({
    name: 'ingredients',
    options: [] as object[],
    selected: [] as string[],
    focus: false
  }),
  watch: {
    selected(val) {
      this.$emit('checked', val)
    }
  },
  methods: {
    ...mapGetters( useIngredientStore, ['getIngredients']),
    updateValue(event: any) {
      const option = event.target.value;

      if (!this.selected.includes(option)) {
        this.selected.push(option);
      } else {
        const index = this.selected.indexOf(option);

        if (index !== -1) {
          this.selected.splice(index, 1);
        }
      }

      this.$emit('update:modelValue', this.selected)
    },
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
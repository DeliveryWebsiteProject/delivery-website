<template>
  <input
    type="file"
    name="file"
    id="file"
    class="inputfile"
    @change="changeFiles"
    accept="image/png"
  />
  <label class="file_label" for="file"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7.4 10h1.59v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.7 3.7a.996.996 0 0 0-1.41 0L6.7 8.29c-.63.63-.19 1.71.7 1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"
      ></path></svg
    >{{ text + '...' }}</label
  >
</template>

<script lang="ts">
import BaseTextField from './BaseTextField.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilePicker',
  emits: ['changeFiles'],
  components: {
    BaseTextField
  },
  data: () => ({
    files: Array<File>(),
    text: 'Escolha um arquivo'
  }),
  methods: {
    changeFiles(event: any) {
      this.files = event.target.files
      this.text = this.files[0]?.name.substring(0, 20) ?? this.text

      const newFiles = this.files;
      this.$emit('changeFiles', newFiles)
    }
  }
})
</script>

<style lang="scss" scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + .file_label {
  padding: 4px 8px;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  background-color: $primary-color;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 4px;
}

.inputfile:focus + .file_label,
.inputfile + .file_label:hover {
  background-color: $primary-darker;
}
</style>

<template>
  <form @submit.prevent="handleForm">
    <h2>
      Редактор динамического компонента
    </h2>

    <fieldset>
      <h3>
        Vue шаблон
      </h3>

      <textarea v-model="template" />
    </fieldset>

    <fieldset>
      <h3>
        CSS стили
      </h3>

      <textarea v-model="styles" />
    </fieldset>

    <button type="submit">
      Сохранить
    </button>
  </form>
</template>

<script setup lang="ts">
import type { TProps, TEmits } from "./edit-form.types.ts";

import { ref } from 'vue'

const props = defineProps<TProps>()
const emits = defineEmits<TEmits>()

const template = ref<string>(props.template);
const styles = ref<string>(props.styles);

const handleForm = (): void => {
  emits('update:model-value', {
    template: template.value,
    styles: styles.value
  })
}
</script>

<style scoped>
textarea {
  width: 100%;
  min-height: 225px;
}

button {
  margin-top: 16px;
}
</style>

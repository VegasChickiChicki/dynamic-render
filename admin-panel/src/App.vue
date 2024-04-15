<template>
  <main>
    <h1>
      Панель администратора
    </h1>

    <section class="main-content">
      <edit-form
        :template="template"
        :styles="templateStyles"
        @update:model-value="handleEditForm"
        v-if="template"
      />

      <component-preview>
        <dynamic-render
          :title="stubDate.title"
          :description="stubDate.description"
          :template="template"
          :template-styles="templateStyles"
        />
      </component-preview>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DynamicRender from "./components/dynamic-render/dynamic-render.vue";
import EditForm from "./components/edit-form/edit-form.vue";
import ComponentPreview from "./components/component-preview/component-preview.vue";

const stubDate = ref<{ title: string, description: string }>({
  title: 'Article title',
  description: 'Article awesome description'
})
const template = ref<string | undefined>(undefined)
const templateStyles = ref<string | undefined>(undefined)

const handleEditForm = async (data: { template: string, styles: string }): Promise<void> => {
  await fetch('http://localhost:3001/api/template', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json()
  }).then((response) => {
    if (response.status === 'OK') {
      template.value = response.data.template
      templateStyles.value = response.data.styles
    }
  })
}

fetch('http://localhost:3001/api/template').then((response) => {
  return response.json()
}).then((response) => {
  if (response.status === 'OK') {
    template.value = response.data.template
    templateStyles.value = response.data.styles
  }
})
</script>

<style>
.main-content {
  display: flex;
  column-gap: 64px;
}
</style>

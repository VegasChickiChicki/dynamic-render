<template>
  <dynamic-render
    v-for="(article, articleIndex) in articles"
    :key="`article--${articleIndex}`"
    :title="article.title"
    :description="article.description"
    :template="template"
    :template-styles="templateStyles"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DynamicRender from "./components/dynamic-render/dynamic-render.vue";

const articles = ref<{ title: string, description: string }[]>([])
const template = ref<string | undefined>(undefined)
const templateStyles = ref<string | undefined>(undefined)

fetch('http://localhost:3001/api/article').then((response) => {
  return response.json()
}).then((response) => {
  if (response.status === 'OK') {
    articles.value = response.data
  }
})
fetch('http://localhost:3001/api/template').then((response) => {
  return response.json()
}).then((response) => {
  if (response.status === 'OK') {
    template.value = response.data.template
    templateStyles.value = response.data.styles
  }
})
</script>

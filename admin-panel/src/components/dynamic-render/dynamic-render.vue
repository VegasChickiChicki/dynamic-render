<template>
  <article class="article" v-if="!dynamicComponent">
    <h1>
      {{ props.title }}
    </h1>

    <p>
      {{ props.description }}
    </p>
  </article>

  <component v-else :is="dynamicComponent" />
</template>

<script setup lang="ts">
import type { IProps} from "./dynamic-render.types.ts";

import { defineProps, computed, DefineComponent, defineComponent, reactive } from 'vue'

const props = defineProps<IProps>()
const dynamicComponent = computed<DefineComponent | null>(() => {
  if (!props.template) {
    return null
  }

  return defineComponent({
    template: props.template,
    setup() {
      return reactive({
        title: props.title,
        description: props.description
      })
    },
  })
})
</script>

<style scoped>
.article {
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid #453f3f;
  border-radius: 5px;

  text-align: center;
}
</style>

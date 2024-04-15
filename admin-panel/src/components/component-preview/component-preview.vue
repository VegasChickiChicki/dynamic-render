<template>
  <div class="component-preview">
    <h2>
      Предпросмотр компонента
    </h2>

    <div class="component-preview__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TSlots } from './component-preview.types.ts'

const slots = defineSlots<TSlots>()
</script>

<style>
.component-preview__content {
  padding: 32px;
  border: 1px solid #703838;
}
</style>

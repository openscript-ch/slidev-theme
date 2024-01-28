<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <div ref="target">
    <slot v-if="targetIsVisible" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: {
    type: Number,
  },
  name: {
    type: String
  },
  time: {
    type: String
  },
  method: {
    type: String
  },
  result: {
    type: String
  },
  ai: {
    type: String as () => 'off' | 'partially' | 'yes',
    default: 'off'
  }
})
</script>

<template>
  <div class="slidev-layout task">
    <div class="my-auto">
      <TaskHeader :number="number" :title="name" :time="time" :method="method" :result="result" :ai="ai" />
      <slot />
    </div>
  </div>
</template>

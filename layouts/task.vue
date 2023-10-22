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
  }
})
</script>

<template>
  <div class="slidev-layout default">
    <div class="my-auto">
      <Task :number="number" :title="name" :time="time" :method="method" :result="result" />
      <slot />
    </div>
  </div>
</template>

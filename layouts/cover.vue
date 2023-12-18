<script setup lang="ts">
import { ref, reactive } from 'vue';

const props = defineProps({
  background: {
    type: String,
  }
})

const hasBackground = ref(!!props.background);

const backgroundStyle = reactive(props.background ? {
  backgroundImage: `url(./brand-text-vertical.svg), url(${props.background})`,
  backgroundPosition: 'center 2rem, center',
  backgroundSize: '6rem, cover'
} : {});
</script>

<style>
  .slidev-layout.cover {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;

      h1 {
        font-size: 1.6rem;
      }
  }

  .slidev-layout.cover > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slidev-layout.with-background {
    text-shadow: 0 0 2px white;
  }
</style>

<template>
  <div class="slidev-layout cover" :class="{'with-background': hasBackground}" :style="backgroundStyle">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

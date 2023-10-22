<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style>
  .slidev-layout.cover {
    display: flex;
    flex-direction: column;
  }
</style>

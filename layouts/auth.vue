<template>
  <div class="dark:bg-dark-blue-1 h-screen">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

useHead({
  title: 'Tokena | Finance App',
});
</script>

<style scoped></style>

<template>
  <div class="flex w-full relative">
    <div>
      <SideBar></SideBar>
    </div>
    <div class="ml-60 relative w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import SideBar from '~/components/common/SideBar';
useHead({
  title: 'Tokena | Finance App',
});
</script>

<style scoped></style>

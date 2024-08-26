<template>
  <div
    class="flex w-full h-screen transform transition transition-duration-2000 dark:bg-dark-blue-1"
  >
    <SideBar class="fixed h-full top-0 left-0 w-60"></SideBar>
    <div class="ml-60 relative flex-1 w-full overflow-y-auto">
      <TopNav></TopNav>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import SideBar from '~/components/common/SideBar';
import TopNav from '~/components/common/TopNav';
useHead({
  title: 'Tokena | Finance App',
});
</script>

<style scoped></style>

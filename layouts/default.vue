<template>
  <div>
    <div>
      <SideBar></SideBar>
    </div>
    <div class="">
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

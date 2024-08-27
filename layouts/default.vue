<template>
  <div
    class="flex w-full h-screen transform transition transition-duration-2000 dark:bg-dark-blue-1"
  >
    <SideBar
      class="hidden lg:fixed lg:flex overflow-auto z-50 bg-white h-full top-0 left-0 w-60 dark:bg-dark-blue-1"
    ></SideBar>

    <SideBar
      v-if="showMenu"
      ref="sidebar"
      class="absolute lg:flex overflow-auto z-50 bg-white h-full top-0 left-0 w-60 dark:bg-dark-blue-1"
    ></SideBar>
    <div class="lg:ml-60 relative flex-1 w-full overflow-y-auto">
      <div class="">
        <TopNav ref="topnav" @open="openMenu"></TopNav>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useHead } from 'nuxt/app';
import { useRoute } from 'vue-router';
import SideBar from '~/components/common/SideBar';
import TopNav from '~/components/common/TopNav';

const showMenu = ref(false);
const sidebar = ref(null);
const topnav = ref(null);
const route = useRoute();

const openMenu = () => {
  showMenu.value = true;
};

const handleClickOutside = (event) => {
  if (
    sidebar.value &&
    !sidebar.value.$el.contains(event.target) &&
    !topnav.value.$el.contains(event.target)
  ) {
    showMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
watch(
  () => route.path,
  () => {
    showMenu.value = false;
  }
);
useHead({
  title: 'Tokena | Finance App',
});
</script>

<style scoped></style>

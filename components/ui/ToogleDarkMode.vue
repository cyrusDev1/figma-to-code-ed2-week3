<template>
  <div
    @click="toggleDarkMode"
    class="rounded-xl text-dark-gray flex items-center border border-gray p-2 cursor-pointer dark:border-opacity-15 dark:text-gray"
  >
    <Icon class="text-xl" :name="isDarkMode ? 'ph:sun' : 'ph:moon'"></Icon>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('dark-mode', isDarkMode.value ? 'true' : 'false');
};

onMounted(() => {
  const darkMode = localStorage.getItem('dark-mode') === 'true';
  isDarkMode.value = darkMode;
  if (darkMode) {
    document.documentElement.classList.add('dark');
  }
});
</script>
